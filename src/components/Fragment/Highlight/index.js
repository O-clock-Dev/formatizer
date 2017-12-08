/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';


/*
 * Local Import
 */
import CustomStyle from './style';
import languages from './languages';


/*
 * Component
 */
const Highlight = ({ language, children }) => {
  // Attribute Options
  const options = {
    style: atomOneDark,
    customStyle: CustomStyle,
    language: languages.find(lang => lang === language),
  };

  /*
   * View
   */
  return (
    <Highlighter {...options}>
      {children.trim()}
    </Highlighter>
  );
};

/*
 * PropTypes
 */
Highlight.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
};

Highlight.defaultProps = {
  language: '',
};

/*
 * Export
 */
export default Highlight;
