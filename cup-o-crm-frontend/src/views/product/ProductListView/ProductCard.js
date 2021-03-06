import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  // Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
// import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12),0 16px 16px rgba(0,0,0,0.12)'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Avatar
            alt="Product"
            src={product.media}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {product.description}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="h5"
        >
          {product.detail1}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="h5"
        >
          {product.detail2}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="h5"
        >
          {product.detail3}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="h5"
        >
          {product.detail4}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="h5"
        >
          {product.detail5}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
