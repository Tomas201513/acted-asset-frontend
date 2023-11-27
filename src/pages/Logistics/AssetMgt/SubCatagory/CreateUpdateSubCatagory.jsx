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

import SubCatagoryContext from '../../../../context/SubCatagoryContext';
import CatagoryContext from '../../../../context/CatagoryContext';
function CreateUpdateSubCatagory({  selectedData, editable, setEditable, name  }) {
  const { createSubCatagory, updateSubCatagory, setSelectedData, setCreateOpen, deleteSubCatagory, warn, SetWarn } = useContext(SubCatagoryContext);
  const { catagoryData } = useContext(CatagoryContext);
  const FormSchema = yup.object().shape({
    subCatagory : yup.string().required("SubCatagory is required"),
    code : yup.string().required("Code is required"),
    description : yup.string().required("Description is required"),
    catagory : yup.string().required("Catagory is required"),

  });
  const handleSubmit = async (values) => {
    try {
        if (selectedData) {
          // console.log(selectedData._id);
          await updateSubCatagory( {selectedData: selectedData._id, values});

        }
        else {
          await createSubCatagory(values);
        }
        setEditable(false);
        setSelectedData(null);
        setCreateOpen(false);
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
                          subCatagory: selectedData ? selectedData.subCatagory : "",
                          code: selectedData ? selectedData.code : "",
                          description: selectedData ? selectedData.description : "",
                          catagory: selectedData ? selectedData.catagory?._id : "",
                        }}
                          validationSchema={FormSchema}   
                          onSubmit={handleSubmit}
  
                      >
                          {({ errors, touched, values, handleChange, handleBlur }) => (
                              <Form
                              // autoComplete="off"
                              // noValidate
                              // onSubmit={handleSubmit}
                              >
                                <Card const sx={{
                                  flexGrow: 1,
                                  border: "none",
                                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.06)",
                                  borderRadius: "10px",
                                  transition: "all 0.3s ease-in-out",
                                  '&:hover': {
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                  }
                                }}>
                                  <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={'2%'}>
          
                                    <CardHeader
                                      title={selectedData ? "Update SubCatagory" : "Create SubCatagory"}
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
                                  <CardContent sx={{ p: '5%' }}>
                                    <Box sx={{ m: -1.5 }}>
                                      <Grid
                                        container
                                        spacing={3}
                                      >
          
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                        <TextField
                                        InputProps={{
                                          readOnly: !editable,
                                        }}
                            fullWidth
                            label="SubCatagory"
                            name="subCatagory"
                            size="small"
                            variant="outlined"
                            value={values.subCatagory}
                            onChange={handleChange}
                            error={Boolean(touched.subCatagory && errors.subCatagory)}
                            helperText={touched.subCatagory && errors.subCatagory}
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        InputProps={{
                          readOnly: !editable,
                        }}
                            fullWidth
                            label="Code"
                            name="code"
                            size="small"
                            variant="outlined"
                            value={values.code}
                            onChange={handleChange}
                            error={Boolean(touched.code && errors.code)}
                            helperText={touched.code && errors.code}
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                        InputProps={{
                          readOnly: !editable,
                        }}
                            fullWidth
                            label="Description"
                            name="description"
                            size="small"
                            variant="outlined"
                            value={values.description}
                            onChange={handleChange}
                            error={Boolean(touched.description && errors.description)}
                            helperText={touched.description && errors.description}
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="catagory_label">
                            Catagory
                            </InputLabel>
                            <Select
                            InputProps={{
                              readOnly: !editable,
                            }}
                            labelId="catagory_label"
                            label="Catagory"
                            name="catagory"
                            size="small"
                            variant="outlined"
                            value={values.catagory}
                            onChange={handleChange}
                            error={Boolean(touched.catagory && errors.catagory)}
                            helperText={touched.catagory && errors.catagory}
                            >
                            {catagoryData?.map((catagory) => (
                                <MenuItem value={catagory._id}>{catagory.catagory}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                              </Grid>
                              </Grid>
                            </Box>
                          </CardContent >
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
          action={deleteSubCatagory}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
  
        />
      </>
    )
  }
  

export default CreateUpdateSubCatagory
CreateUpdateSubCatagory.propTypes = {
  selectedData: PropTypes.object,
  editable: PropTypes.bool,
};

