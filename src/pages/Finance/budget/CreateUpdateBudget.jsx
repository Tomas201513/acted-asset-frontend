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

import BudgetContext from 'src/context/BudgetContext';
import Project from 'src/context/ProjectContext';

const CreateUpdateBudget = ({ selectedData, editable, setEditable, name }) => {
    const {setSelectedData,createBudget,
      updateBudget,
      deleteBudget,budgetData, financeData, financeCounts, refetch,warn,SetWarn} = useContext(BudgetContext);
    const {projectData} = useContext(Project);
    
    const FormSchema = yup.object().shape({
        project : yup.string().required("Project is required"),
        budgetAmount : yup.number().required("Budget Amount is required"),
        budgetCode : yup.string().required("Budget Code is required"),
        budgetName : yup.string().required("Budget Name is required"),
        budgetStartDate : yup.string().required("Budget Start Date is required"),
        budgetEndDate : yup.string().required("Budget End Date is required"),
        budgetType : yup.string().required("Budget Type is required"),
        budgetStatus : yup.string().required("Budget Status is required"),
        budgetDescription : yup.string().required("Budget Description is required"),
    });

    const handleSubmit = async (values) => {
        try {
            if (selectedData) {
              console.log(">>>>>>>",selectedData._id);
              await updateBudget(selectedData._id, values);
                setEditable(false); 
            }
            else {
              console.log(">>>>>>>",values);

              await createBudget(values);
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
                            project: selectedData?.project || "",
                            budgetAmount: selectedData?.budgetAmount || "",
                            budgetCode: selectedData?.budgetCode || "",
                            budgetName: selectedData?.budgetName || "",
                            budgetStartDate: selectedData?.budgetStartDate || "",
                            budgetEndDate: selectedData?.budgetEndDate || "",
                            budgetType: selectedData?.budgetType || "",
                            budgetStatus: selectedData?.budgetStatus || "",
                            budgetDescription: selectedData?.budgetDescription || "",
                          }}
                            validationSchema={FormSchema}
                            onSubmit={handleSubmit}
                        >

                            {({ errors, touched, values, handleChange, handleBlur }) => (

                                <Form>
                                  <Card>
                                <CardHeader
                                subheader={selectedData ? "Update Budget" : "Create Budget"}
                                title="Budget"
                                />
                                <Divider />
                                <CardContent>
                                  <Grid
                                    container
                                    spacing={3}
                                  >
                                     <Grid
                                                    
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">project</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        name="project"
                                                        value={values.project}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // disabled={!editable}
                                                        error={Boolean(touched.project && errors.project)}
                                                        helperText={touched.project && errors.project}
                                                        >
                                                        {projectData.map((project) => (
                                                            <MenuItem value={project._id}>{project?.projectCode}</MenuItem>
                                                        ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                      <TextField
                                        error={Boolean(touched.budgetAmount && errors.budgetAmount)}
                                        fullWidth
                                        helperText={touched.budgetAmount && errors.budgetAmount}
                                        label="Budget Amount"
                                        name="budgetAmount"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.budgetAmount}
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
                                        error={Boolean(touched.budgetCode && errors.budgetCode)}
                                        fullWidth
                                        helperText={touched.budgetCode && errors.budgetCode}
                                        label="Budget Code"
                                        name="budgetCode"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.budgetCode}
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
                                        error={Boolean(touched.budgetName && errors.budgetName)}
                                        fullWidth
                                        helperText={touched.budgetName && errors.budgetName}
                                        label="Budget Name"
                                        name="budgetName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.budgetName}
                                        variant="outlined"
                                      />
                                    </Grid>
                                  
                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Budget Type</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.budgetType}
                                            label="Budget Type"
                                            name="budgetType"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={"Capital"}>Capital</MenuItem>
                                            <MenuItem value={"Revenue"}>Revenue</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      md={6}
                                      lg={6}
                                    >
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Budget Status</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.budgetStatus}
                                            label="Budget Status"
                                            name="budgetStatus"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={"active"}>Active</MenuItem>
                                            <MenuItem value={"inactive"}>Inactive</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      md={12}
                                      lg={12}
                                    >
                                        <TextField
                                            error={Boolean(touched.budgetDescription && errors.budgetDescription)}
                                            fullWidth
                                            helperText={touched.budgetDescription && errors.budgetDescription}
                                            label="Budget Description"
                                            name="budgetDescription"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.budgetDescription}
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      md={12}
                                      lg={12}
                                    >
                                        <TextField
                                            error={Boolean(touched.budgetStartDate && errors.budgetStartDate)}
                                            fullWidth
                                            helperText={touched.budgetStartDate && errors.budgetStartDate}
                                            label="budgetStartDate"
                                            name="budgetStartDate"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.budgetStartDate}
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      md={12}
                                      lg={12}
                                    >
                                        <TextField
                                            error={Boolean(touched.budgetEndDate && errors.budgetEndDate)}
                                            fullWidth
                                            helperText={touched.budgetEndDate && errors.budgetEndDate}
                                            label="budgetEndDate"
                                            name="budgetEndDate"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.budgetEndDate}
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                        />
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
                setWarn={SetWarn}
                deleteFunction={deleteBudget}
                selectedData={selectedData}
                setEditable={setEditable}
                setSelectedData={setSelectedData}
                // setCreateOpen={setCreateOpen}
            />
        </>
    );
}

CreateUpdateBudget.propTypes = {
    setCreateOpen: PropTypes.func,
    selectedData: PropTypes.object,
    editable: PropTypes.bool,
    setEditable: PropTypes.func,
    budget: PropTypes.array,
};

export default CreateUpdateBudget;

