/*
 * Package Import
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UilAngleUp, UilArrow } from '@iconscout/react-unicons';
import Highlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/dist/styles';

/*
 * Local Import
 */
import { customStyle, lineNumberContainerStyle, codeTagProps } from './style';
import languages from './languages';

/*
 * Patterns
 */
/* eslint-disable prefer-template */
const regexp = '```(?:(' + languages.join('|') + ')\\s)?((?:.|\\n)+?)```\\n?';
export const patternHighlight = new RegExp(regexp, 'g');

/*
 * Component
 */
const Highlight = ({ children }) => {
  // Never forget to reset lastIndex after a .exec()
  const matches = patternHighlight.exec(children);
  patternHighlight.lastIndex = 0;

  // Highlighter options
  const options = {
    style,
    customStyle,
    codeTagProps,
  };

  // First capturing paren: language
  if (matches[1]) {
    options.language = matches[1];
  }

  // Second capturing paren: code + trim it
  const prevCode = matches[2];
  const code = prevCode[0] === '\n' ? prevCode.slice(1) : prevCode;

  // Line Numbers
  const lines = code.trim().split(/\r\n|\r|\n/).length;
  if (lines > 1) {
    options.showLineNumbers = true;
    options.lineNumberContainerStyle = lineNumberContainerStyle;
  }
  /*
   * state
   */
  const [isOpen, setOpen] = useState(false);

  /*
   * Handlers
   */
  const handleClick = () => {
    setOpen(!isOpen);
  };

  // View
  return (
    <React.Fragment>
      <div className="snippet-container">
        <div
          className="snippet-header"
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '8px 4px',
          }}
          onClick={handleClick}
          data-id="summary"
        >
          <UilArrow
            className="snippet-icon-code"
            style={{
              marginRight: '8px',
              height: '1.5rem',
              width: '1.5rem',
            }}
          />
          <span
            className="snippet-title"
            style={{
              marginRight: '8px',
            }}
          >
            Smippet
          </span>
          <UilAngleUp
            className="snippet-icon-arrow"
            style={{
              transform: isOpen && 'rotate(180deg)',
              height: '1.5rem',
              width: '1.5rem',
            }}
          />
        </div>
        <div
          className="snippet-content"
          style={{ display: !isOpen && 'none' }}
          data-id="content"
        >
          <Highlighter {...options}>{code}</Highlighter>;
        </div>
      </div>
    </React.Fragment>
  );
};

/*
 * PropTypes
 */
Highlight.propTypes = {
  children: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Highlight;
