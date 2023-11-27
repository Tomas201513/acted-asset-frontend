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
import Warndialogue from "src/components/Warndialogue";

import DepartmentContext from "src/context/DepartmentContext";

function CreateUpdateDepartment({selectedData, editable, setEditable, name }) {

    const { createDepartment,
      updateDepartment,
      deleteDepartment,setSelectedData, setCreateOpen, warn, SetWarn } = useContext(DepartmentContext);
    const FormSchema = yup.object().shape({
        dptName: yup.string().required("Department Name is required"),
        dptContactInfo: yup.string().required("Contact Info is required"),
        dptLocation: yup.string().required("Location is required"),
        dptStatus: yup.string().required("Status is required")
    });

    const handleSubmit = async (values) => {
        try {
          if (selectedData) {
            // console.log(selectedData._id);
            await updateDepartment( {selectedData: selectedData._id, values});
            }
            else {
                await createDepartment(values);
            }
            setEditable(false);
            setSelectedData(null);
            setCreateOpen(false);
        }
        catch (err) {
            console.log(err);
        }
    };

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
                        dptName: selectedData?.dptName || "",
                        dptContactInfo: selectedData?.dptContactInfo || "",
                        dptLocation: selectedData?.dptLocation || "",
                        dptStatus: selectedData?.dptStatus || "",
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
                                        error={Boolean(touched.dptName && errors.dptName)}
                                        fullWidth
                                        helperText={touched.dptName && errors.dptName}
                                        label="Department Name"
                                        name="dptName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.dptName}
                                        variant="outlined"
                                        disabled={!editable}
                                    />
                                    </Grid>
                                    <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.dptContactInfo && errors.dptContactInfo)}
                                        fullWidth
                                        helperText={touched.dptContactInfo && errors.dptContactInfo}
                                        label="Contact Info"
                                        name="dptContactInfo"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.dptContactInfo}
                                        variant="outlined"
                                        disabled={!editable}
                                    />
                                    </Grid>
                                    <Grid
                                    item
                                    md={6}
                                    xs={12}
                                    >
                                    <TextField
                                        error={Boolean(touched.dptLocation && errors.dptLocation)}
                                        fullWidth
                                        helperText={touched.dptLocation && errors.dptLocation}
                                        label="Location"
                                        name="dptLocation"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.dptLocation}
                                        variant="outlined"
                                        disabled={!editable}
                                    />
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
                                        label="Status"
                                        name="dptStatus"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        required
                                        value={values.dptStatus}
                                        variant="outlined"
                                        disabled={!editable}
                                        >
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
                            <> <Button variant="contained" type="submit">
                              {"Create"}
                            </Button></>
                          )}

                        </CardActions>
                      </Card>
                    </Form>)}
                </Formik >
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>
      <Warndialogue
       open={warn}
       setOpen={SetWarn}
       name={name}
       action={deleteDepartment}
       selectedData={selectedData}
       setSelectedData={setSelectedData}

      />
    </>
  )
}

CreateUpdateDepartment.propTypes = {
    setCreateOpen: PropTypes.func,
    selectedData: PropTypes.object,
    editable: PropTypes.bool,
    setEditable: PropTypes.func,
    name: PropTypes.string,

};

export default CreateUpdateDepartment;


