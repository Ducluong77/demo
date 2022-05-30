import React from 'react';
import { Button, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
  '&': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const StyleNavLink = styled(NavLink)(({ theme }) => ({
  '&': {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&': {
    cursor: 'pointer',
    justifyContent: 'center',
    borderRadius: 3,
    color: 'inherit',
    textDecoration: 'none',
  },
  '&.active > div': {
    borderBottom: '2px solid ',
  },
  '&.active .MuiTypography-root': {
    fontWeight: 'bold',
  },
}));

const sections = [
  { name: 'Salads', icon: '', path: '/' },
  { name: 'Knowledge', icon: '', path: '/knowledge' },
  { name: 'Dashboard', icon: '', path: '/dashboard' },
  { name: 'Get Started', icon: '', path: '/docs' },
];

const Sections = () => {
  return (
    <StyledBox>
      {sections.map((el) => (
        <List key={el.name} component="nav">
          <StyledListItem component={NavLink} button exact to={el.path}>
            <ListItemText primary={el.name} />
            {el.icon && <ListItemIcon>{el.icon}</ListItemIcon>}
          </StyledListItem>
        </List>
      ))}
    </StyledBox>
  );
};

export default Sections;
