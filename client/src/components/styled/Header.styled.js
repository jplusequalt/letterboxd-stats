import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header.bg};
  color: ${({ theme }) => theme.header.color};
  font-family: var(--header-font);
  font-weight: var(--header-font-weight);
  font-size: var(--header-font-size);

  nav {
    position: relative;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem;
  } 

  .header-container {
    max-width: 65rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    line-height: 0;
    margin-right: 1rem;
  }

  .logo-container {
    width: max(125px, 150px, 175px);
    height: 40px;
  }
  
  .letterboxd-text > path {
    fill: ${({ theme }) => theme.header.logoColor}
  }

  .header-links {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }

  .header-links > div {
    display: flex;
    gap: 2rem;
  }

  .login,
  .stats {
    color: ${({ theme }) => theme.header.color};
  }

  .login:hover {
    color: #40bcf4;
  }

  .stats:hover {
    color: ${({ theme }) => theme.header.colorHover};
  }
`