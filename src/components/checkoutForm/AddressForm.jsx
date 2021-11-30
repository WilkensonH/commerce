import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectInput from './SelectInput'
import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import FormInput from "./CustomTextField";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
   
    id: code,
    label: name, 
  }));
 
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
  const options = shippingOptions.map((shippingOption) => ({
    id: shippingOption.id,
    label: `${shippingOption.description} _ ${shippingOption.price.formatted_with_symbol}`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision, setShippingSubdivision, checkoutToken.id,shippingCountry]);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={2}>
            <FormInput name="firstName" label="First name" />
            <FormInput name="lastName" label="Last name" />
            <FormInput name="address1" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="ZIP / Postal Code" />
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
            
            <SelectInput   
              label="Shipping Country"
              value={shippingCountry}
              onChange={(e) => setShippingCountry(e.target.value)}
              options={Object.entries(shippingCountries).map(
                ([code, name]) => ({ id: code, label: name })
              )}
            />
            <SelectInput
              label="Shipping Subdivision"
              value={shippingSubdivision}
              onChange={(e) => setShippingSubdivision(e.target.value)}
              options={Object.entries(shippingSubdivisions).map(
                ([code, name]) => ({ id: code, label: name })
              )}
            />

            <SelectInput
              label="Shipping Option"
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
              options={shippingOptions.map(({ id, description, price }) => ({
                id,
                label: `${description} - (${price.formatted_with_symbol})`,
              }))}
            />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart" size="small" variant="outlined">
              Back to Cart
            </Button>
            <Button
              type="submit"
              to="/payment"
              size="small"
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
