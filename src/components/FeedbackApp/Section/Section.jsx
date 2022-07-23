import PropTypes from 'prop-types';
import { StyledTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape),
};