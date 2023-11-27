import { useContext } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Container,
  Tooltip,
  IconButton,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Formik, Form } from "formik";
import * as yup from "yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";
import Warndialogue from "../../../components/Warndialogue";

import  PositionContext from "../../../context/PositionContext";
import DepartmentContext from "../../../context/DepartmentContext";

const CreateUpdatePosition = ({ selectedData, editable, setEditable, name}) => {
    const {  createPosition, updatePosition, deletePosition, warn, SetWarn ,setSelectedData} = useContext(PositionContext);
        const { departmentData } = useContext(DepartmentContext);
      
      const FormSchema = yup.object().shape({
        positionName: yup.string().required("Position Name is required"),
        department: yup.string().required("Department is required"),
        positionStatus: yup.string().required("Status is required"),
    
      });
    
        const initialValues = {
            positionName: selectedData?.positionName || "",
            department: selectedData?.department?._id || "",
            positionStatus: selectedData?.positionStatus || "", 
        };
    
        const handleSubmit = async (values) => {
            try {
                if (selectedData) {
                  console.log("update ofice",selectedData._id);
                  await  updatePosition({selectedData:selectedData._id, values});
                }
                else {
                  await createPosition(values );
                }
                setEditable(false);
    
            }
            catch (err) {
                console.log(err);
            }
        }
    
    
            return (
                <>
                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    py: '10%',
                    ml: '5%',
                    mr: '5%',
                  }}
                >
                  <Container maxWidth="lg">
          
                    < Box>
                      <Grid
                        container
                        spacing={3}
                      >
                        <Grid
                          xs={12}
                          md={12}
                          lg={4}
                        >
                          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={'5%'} >
          
                            <Tooltip title="Back">
                              <IconButton
                                onClick={() => {
                                  setSelectedData(null), setEditable(false), setCreateOpen(false);
                                }}
                                size="small"
                              >
                                <ArrowBackIcon size="small" />
                              </IconButton>
                            </Tooltip>
                            {/* <Box sx={{ flexGrow: 1 }} /> */}
          
                          </Box>
                        </Grid>
                        <Grid
                          xs={12}
                          md={12}
                          lg={12}
                        >
                          <Formik
                            initialValues={{
                                positionName: selectedData?.positionName || "",
                                department: selectedData?.department || "",
                                positionStatus: selectedData?.positionStatus || "", 
                            }}
                            validationSchema={FormSchema}
                            onSubmit={handleSubmit}
                            >
                                 {({ errors, touched, values, handleChange, handleBlur }) => (

                                <Form>
                                    <Card>
                                    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={'2%'}>
        
        <CardHeader
          title={selectedData ? "Update User" : "Create User"}
          subheader={selectedData ? "The information can be edited" : "Fill in the required information"}
        />
        {selectedData ? (

          <>
            <Tooltip title="Editable">
              <FormControlLabel
                control={<Switch />}
                // label="edit"
                onChange={() => setEditable(!editable)}
              />
            </Tooltip>
          </>) : (
          <></>
        )}

      </Box>
                                <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                >
                                    <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean (touched.positionName && errors.positionName)}
                                        fullWidth
                                        helperText={touched.positionName && errors.positionName}
                                        label="Position Name"
                                        name="positionName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.positionName}
                                        variant="outlined"
                                    />
                                    </Grid>
                                    <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="department"
                                        value={values.department}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={!editable}
                                                error={Boolean(touched.department && errors.department)}
                                                helperText={touched.department && errors.department}
                                                
                                        >
                                        {departmentData.map((department) => (
                                                    <MenuItem key={department._id} value={department._id}>{department.dptName}</MenuItem>
                                                    ))}
                                        </Select>
                                    </FormControl>
                                    </Grid>
                                    <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="positionStatus"
                                        value={values.positionStatus}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="active">Active</MenuItem>
                                        <MenuItem value="inactive">Inactive</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </Grid>
                                    </Grid>
                                </CardContent>
                                <Divider />
                                <CardActions sx={{ justifyContent: 'flex-end', mt: 2 }}>
                                          {selectedData ? (
                
                                            <>
                                              <Button variant="contained" type="submit">
                                                {"Update"}
                                              </Button>
                                              <Tooltip title="Delete">
                                                <Button variant="contained" color="error" onClick={() => SetWarn(true)}>
                                                  {"Delete"}
                                                </Button>
                                              </Tooltip>
                
                                            </>) : (
                                            <> <Button variant="contained" type="submit" >
                                              {"Create"}
                                            </Button></>
                                          )}
                
                                        </CardActions>
                            </Card>
                            </Form>
                        )}
                    </Formik>
                    </Grid>
                </Grid>
                </Box>
            </Container>
            </Box>
            <Warndialogue
                open={warn}
                setOpen={SetWarn}
                name={name}
                action={deletePosition}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />
        </>
    );
}

CreateUpdatePosition.propTypes = {
    selectedData: PropTypes.object,
    editable: PropTypes.bool,
    setEditable: PropTypes.func,
    name: PropTypes.string,
  };
  
  export default CreateUpdatePosition;





