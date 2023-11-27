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

import ProjectContext from "src/context/ProjectContext";

const CreateUpdateProject = ({ setCreateOpen, selectedData, editable, setEditable, warn, SetWarn }) => {
    const {createProject, updateProject} = useContext(ProjectContext);
    const FormSchema = yup.object().shape({
        donorName: yup.string().required("Donor Name is required"),
        donorCode: yup.string().required("Donor Code is required"),
        projectName: yup.string().required("Project Name is required"),
        projectCode: yup.string().required("Project Code is required"),
    });
    const handleSubmit = async (values) => {
        try {
            if (selectedData) {
              // console.log(selectedData._id);
              await 
                updateProject({ id: selectedData._id, data: values });
            }
            else {
              await createProject(values);
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
                            donorName: selectedData ? selectedData.donorName : "",
                            donorCode: selectedData ? selectedData.donorCode : "",
                            projectName: selectedData ? selectedData.projectName : "",
                            projectCode: selectedData ? selectedData.projectCode : "",
                          }}
                            validationSchema={FormSchema}
                            onSubmit={handleSubmit}
                        >
                              {({ errors, touched, values, handleChange, handleBlur }) => (

                            <Form>
                            <Card>
                            <CardHeader
                            subheader={selectedData ? 
                                "Update Project" : "Create Project"}
                            title="Project"
                            />
                            <Divider />
                            <CardContent>
                                  <Grid
                                    container
                                    spacing={3}
                                  >
                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <TextField
                                            error={Boolean(touched.donorName && errors.donorName)}
                                            fullWidth
                                            helperText={touched.donorName && errors.donorName}
                                            label="Donor Name"
                                            name="donorName"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.donorName}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <TextField
                                            error={Boolean(touched.donorCode && errors.donorCode)}
                                            fullWidth
                                            helperText={touched.donorCode && errors.donorCode}
                                            label="Donor Code"
                                            name="donorCode"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.donorCode}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <TextField
                                            error={Boolean(touched.projectName && errors.projectName)}
                                            fullWidth
                                            helperText={touched.projectName && errors.projectName}
                                            label="Project Name"
                                            name="projectName"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.projectName}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <TextField
                                            error={Boolean(touched.projectCode && errors.projectCode)}
                                            fullWidth
                                            helperText={touched.projectCode && errors.projectCode}
                                            label="Project Code"
                                            name="projectCode"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.projectCode}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    </Grid>
                            </CardContent>
                            <Divider />
                            <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              p: 2
                            }}
                            >
                            <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            >
                            Save Project
                            </Button>
                            </Box>
                            </Card>
                            </Form>
                              )}
                        </Formik>
                        </Grid>
                    </Grid>
                    </Box>
                </Container>
                </Box>
                <Warndialogue open={warn} setOpen={SetWarn} />
                </>
    );
}

CreateUpdateProject.propTypes = {
    setCreateOpen: PropTypes.func,
    selectedData: PropTypes.object,
    editable: PropTypes.bool,
    setEditable: PropTypes.func,
    warn: PropTypes.bool,
    SetWarn: PropTypes.func,
}

export default CreateUpdateProject;

