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
import AssetContext from "../../../../context/AssetContext";
import SubCatagoryContext from '../../../../context/SubCatagoryContext';
import BudgetContext from '../../../../context/BudgetContext';
import UserContext from "../../../../context/UserContext";


function CreateUpdateAsset({  selectedData, editable, setEditable, name  }) {
    const {subcatagoryData, createSubCatagory, updateSubCatagory, deleteSubCatagory, } = useContext(SubCatagoryContext);
    const { assetData, createAsset, updateAsset, setSelectedData, setCreateOpen, deleteAsset, warn, SetWarn } = useContext(AssetContext);
    const {budgetData, createBudget, updateBudget, deleteBudget } = useContext(BudgetContext);
    const {userData}=useContext(UserContext)
    console.log("userData===+",userData);
    const FormSchema = yup.object().shape({
        subCatagory: yup.string().required("SubCatagory is required"),
        type: yup.string().required("type is required"),
        budget: yup.string().required("budget is required"),
        brand: yup.string().required("brand is required"),
        model: yup.string().required("model is required"),
        serialNumber: yup.string().required("serialNumber is required"),
        tag: yup.string().required("tag is required"),
        // probudcat: yup.string(),
        // item_count: yup.string(),
        price : yup.string().required("price is required"),
        registeringOfficer: yup.string().required("registeringOfficer is required"),
        currentUser: yup.string().required("currentUser is required"),
        accessory: yup.string().required("accessory is required"),
        supplier: yup.string().required("supplier is required"),
        purchaseDate: yup.string().required("purchaseDate is required"),
        operationStartDate: yup.string().required("operationStartDate is required"),
        operationEndDate: yup.string(),
        warranty: yup.string().required("warranty is required"),
        status: yup.string().required("status is required"),
        reason: yup.string().required("reason is required"),
        remarks: yup.string().required("remarks is required"),
        asset_state: yup.string().required("asset_state is required"),
        life_span: yup.string().required("life_span is required"),
        });
       
          
        const handleSubmit = async (values) => {
          console.log("Assetvalues", values);
            try {
                if (selectedData) {
                  console.log('#######',selectedData);
                  await updateAsset({selectedData: selectedData._id, values})
                }
                else {
                    console.log('#######',selectedData);

                  await createAsset(values);
                }
                setCreateOpen(false);
                setSelectedData(null);
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
                                            subCatagory: selectedData ? selectedData.subCatagory?._id : "",
                                            type: selectedData ? selectedData.type : "",
                                            brand: selectedData ? selectedData.brand : "",
                                            model: selectedData ? selectedData.model : "",
                                            serialNumber: selectedData ? selectedData.serialNumber : "",
                                            tag: selectedData ? selectedData.tag : "",
                                            // item_count: selectedData ? selectedData.item_count : "",
                                            // probudcat: selectedData ? selectedData.probudcat : "",
                                            price: selectedData ? selectedData.price : "",
                                            registeringOfficer: selectedData ? selectedData.registeringOfficer?._id : "",
                                            currentUser: selectedData ? selectedData.currentUser?._id : "",
                                            accessory: selectedData ? selectedData.accessory : "",
                                            supplier: selectedData ? selectedData.supplier : "",
                                            purchaseDate: selectedData ? selectedData.purchaseDate : "",
                                            operationStartDate: selectedData ? selectedData.operationStartDate : "",
                                            operationEndDate: selectedData ? selectedData.operationEndDate : "",
                                            warranty: selectedData ? selectedData.warranty : "",
                                            status: selectedData ? selectedData.status : "",
                                            reason: selectedData ? selectedData.reason : "",
                                            remarks: selectedData ? selectedData.remarks : "",
                                            asset_state: selectedData ? selectedData.asset_state : "",
                                            life_span: selectedData ? selectedData.life_span : "",
                                            budget: selectedData ? selectedData.budget?._id : "",
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
                                                title={selectedData ? "Update Asset" : "Create Asset"}
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
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Sub Catagory</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="subCatagory"
                                                value={values.subCatagory}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.subCatagory && errors.subCatagory)}
                                                helperText={touched.subCatagory && errors.subCatagory}
                                                >
                                                {subcatagoryData.map((subcatagory) => (
                                                    <MenuItem value={subcatagory._id}>{subcatagory?.subCatagory}</MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Type"
                                                name="type"
                                                value={values.type}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.type && errors.type)}
                                                helperText={touched.type && errors.type}
                                            />
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Brand"
                                                name="brand"
                                                value={values.brand}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.brand && errors.brand)}
                                                helperText={touched.brand && errors.brand}
                                            />

                                                
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Model"
                                                name="model"
                                                value={values.model}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.model && errors.model)}
                                                helperText={touched.model && errors.model}
                                            />
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Serial No"
                                                name="serialNumber"
                                                value={values.serialNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.serialNumber && errors.serialNumber)}
                                                helperText={touched.serialNumber && errors.serialNumber}
                                            />
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Asset Tag"
                                                name="tag"
                                                value={values.tag}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.tag && errors.tag)}
                                                helperText={touched.tag && errors.tag}
                                            />
                                        </Grid>
                                        {/* <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Item Count"
                                                name="item_count"
                                                value={values.item_count}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.item_count && errors.item_count)}
                                                helperText={touched.item_count && errors.item_count}
                                            />
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Probudcat"
                                                name="probudcat"
                                                value={values.probudcat}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.probudcat && errors.probudcat)}
                                                helperText={touched.probudcat && errors.probudcat}
                                            />
                                        </Grid> */}
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Purchase Date"
                                                name="purchaseDate"
                                                value={values.purchaseDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.purchaseDate && errors.purchaseDate)}
                                                helperText={touched.purchaseDate && errors.purchaseDate}
                                            />
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Purchase Cost"
                                                name="price"
                                                value={values.price}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.price && errors.price)}
                                                helperText={touched.price && errors.price}
                                            />
                                        </Grid> <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Accessories"
                                                name="accessory"
                                                value={values.price}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.price && errors.price)}
                                                helperText={touched.price && errors.price}
                                            />
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Warranty"
                                                name="warranty"
                                                value={values.warranty}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.warranty && errors.warranty)}
                                                helperText={touched.warranty && errors.warranty}
                                            />
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Supplier"
                                                name="supplier"
                                                value={values.price}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.price && errors.price)}
                                                helperText={touched.price && errors.price}
                                            />
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Operation Start Date"
                                                name="operationStartDate"
                                                value={values.operationStartDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.operationStartDate && errors.operationStartDate)}
                                                helperText={touched.operationStartDate && errors.prioperationStartDatece}
                                            />
                                        </Grid>
                                        <Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Operation End Date"
                                                name="operationEndDate"
                                                value={values.operationEndDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.operationEndDate && errors.operationEndDate)}
                                                helperText={touched.operationEndDate && errors.operationEndDate}
                                            />
                                        </Grid><Grid
                                          xs={12}
                                          md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Life Span"
                                                name="life_span"
                                                value={values.life_span}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.life_span && errors.life_span)}
                                                helperText={touched.life_span && errors.life_span}
                                            />
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            md={6}
                                        >
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Asset State</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="asset_state"
                                                value={values.asset_state}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.asset_state && errors.asset_state)}
                                                helperText={touched.asset_state && errors.asset_state}
                                                >
                                                <MenuItem value="new">New</MenuItem>
                                                <MenuItem value="very_good">Very Good</MenuItem>
                                                <MenuItem value="good">Good</MenuItem>
                                                <MenuItem value="medium">Medium</MenuItem>
                                                <MenuItem value="bad">Bad</MenuItem>
                                                </Select>
                                                  

                                            </FormControl>
                                        </Grid>
                                        
                                        <Grid
                                                    
                                            xs={12}
                                            md={6}
                                        >
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Budget</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="budget"
                                                value={values.budget}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.budget && errors.budget)}
                                                helperText={touched.budget && errors.budget}
                                                >
                                                {budgetData.map((budget) => (
                                                    <MenuItem value={budget._id}>{budget?.budgetName}</MenuItem>
                                                ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                                    
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-labeeel">Registering Officer</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-labeeel"
                                                        id="demo-simple-seleect"
                                                        name="registeringOfficer"
                                                        value={values.registeringOfficer}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        disabled={!editable}
                                                        error={Boolean(touched.registeringOfficer && errors.registeringOfficer)}
                                                        helperText={touched.registeringOfficer && errors.registeringOfficer}
                                                        >
                                                        {userData?.map((userDatas) => (
                                                            <MenuItem value={userDatas?._id}>{userDatas?.email}</MenuItem>
                                                        ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid><Grid
                                                    
                                                    xs={12}
                                                    md={6}
                                                >
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-labeeeel">Current User</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-labeeeel"
                                                        id="demo-simple-seleeect"
                                                        name="currentUser"
                                                        value={values.currentUser}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        disabled={!editable}
                                                        error={Boolean(touched.currentUser && errors.currentUser)}
                                                        helperText={touched.currentUser && errors.currentUser}
                                                        >
                                                        {userData?.map((userDataa) => (
                                                            <MenuItem value={userDataa?._id}>{userDataa?.email}</MenuItem>
                                                        ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                        <Grid
                                            xs={12}
                                            md={6}
                                        >
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="status"
                                                value={values.status}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.status && errors.status)}
                                                helperText={touched.status && errors.status}
                                                >
                                                <MenuItem value="active">Active</MenuItem>
                                                <MenuItem value="inactive">Inactive</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            md={6}
                                        >
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-labeel">reason</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-labeel"
                                                id="demo-simple-select"
                                                name="reason"
                                                value={values.reason}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.reason && errors.reason)}
                                                helperText={touched.reason && errors.reason}
                                                >
                                                <MenuItem value="assigned">Assigned</MenuItem>
                                                <MenuItem value="in_stock">In Stock</MenuItem>
                                                <MenuItem value="in_maintenance">In Maintenance</MenuItem>
                                                <MenuItem value="other">Other</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            md={6}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Remarks"
                                                name="remarks"
                                                value={values.remarks}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={!editable}
                                                error={Boolean(touched.remarks && errors.remarks)}
                                                helperText={touched.remarks && errors.remarks}
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
                                            <> <Button variant="contained" type="submit" >
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
                        action={deleteAsset}
                        selectedData={selectedData}
                        setSelectedData={setSelectedData}
                
                      />
                    </>
                  )
                }
                
              
export default CreateUpdateAsset;
CreateUpdateAsset.propTypes = {
  name: PropTypes.string.isRequired,
  selectedData: PropTypes.object,
  editable: PropTypes.bool.isRequired,
  setEditable: PropTypes.func.isRequired,
};

