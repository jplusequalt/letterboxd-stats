import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.footer.color};
  border-top: 1px solid ${({ theme }) => theme.footer.borderColor};
  font-size: .85rem;
  
  .footer-container {
    height: 2rem;
    padding: .75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 65rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.footer.color};
  }

  a:hover {
    text-decoration: underline;
  }

  .theme-toggle {
    border: none;
    background: none;
    font-family: 'Nunito Sans';
    color: ${({ theme }) => theme.footer.color};
    font-weight: 200;
  }

  .theme-toggle:hover {
    text-decoration: underline;
  }
`