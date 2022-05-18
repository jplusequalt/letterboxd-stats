import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header.bg};
  color: ${({ theme }) => theme.header.color};
  font-weight: var(--header-font-weight);
  font-size: var(--header-font-size);

  nav {
    position: relative;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: .5rem;
  } 

  .header-container {
    max-width: 65rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-container > p:hover {
    color: ${({ theme }) => theme.header.colorHover};
  }
  
  .logo {
    line-height: 0;
    margin-right: 2rem;
  }

  .logo-container {
    width: max(125px, 150px, 175px);
    height: 40px;
  }

  
  .letterboxd-text > path {
    fill: ${({ theme }) => theme.header.logoColor}
  }
`