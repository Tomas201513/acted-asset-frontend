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

import CatagoryContext from '../../../../context/CatagoryContext';

function CreateUpdateCatagory({  selectedData, editable, setEditable, name  }) {
  const { createCatagory, updateCatagory, setSelectedData, setCreateOpen, deleteCatagory, warn, SetWarn } = useContext(CatagoryContext);
  const FormSchema = yup.object().shape({
    catagory: yup.string().required("Catagory is required"),
  });


  const handleSubmit = async (values) => {
    try {
        if (selectedData) {
          // console.log(selectedData._id);
          await updateCatagory( {selectedData: selectedData._id, values});

        }
        else {
          await createCatagory(values);
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
                        catagory: selectedData ? selectedData.catagory : "",
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
        
                            autoFocus={editable}
                            fullWidth
                            label="Catagory"
                            name="catagory"
                            value={values?.catagory}
                            onChange={handleChange}
                            error={Boolean(touched.catagory && errors.catagory)}
                            helperText={touched.catagory && errors.catagory}
                            />
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
        action={deleteCatagory}
        selectedData={selectedData}
        setSelectedData={setSelectedData}

      />
    </>
  )
}

export default CreateUpdateCatagory
CreateUpdateCatagory.propTypes = {
  selectedData: PropTypes.object,
  editable: PropTypes.bool,
};

