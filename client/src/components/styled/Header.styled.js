import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header.bg};
  color: ${({ theme }) => theme.header.color};
  font-family: var(--header-font);
  font-weight: var(--header-font-weight);
  font-size: var(--header-font-size);

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  padding: .25rem 2.5rem .25rem 2.5rem;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 1000;

  .logo-container {
    width: max(125px, 150px, 175px);
    height: 40px;
  }
  
  .letterboxd-text > path {
    fill: ${({ theme }) => theme.header.logoColor}
  }

  .logo-and-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
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