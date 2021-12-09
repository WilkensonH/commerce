import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import useStyles from "./styles";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      Your shopping cart is empty,{"  "}
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!cart.line_items) return "Loading";

  const renderCart = () => (
    <>
      <Grid container spacing={2}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className="checkout-total">
        <div xs={12} md={6}>
          <Typography variant="h4">
            Subtotal:&nbsp;{cart.subtotal.formatted_with_symbol}
          </Typography>
        </div>
        <div className="checkout-btn">
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="small"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
          <Button
            className={classes.emptyButton}
            size="small"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            EmptyCart
          </Button>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
