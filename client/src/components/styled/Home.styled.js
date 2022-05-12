import styled from 'styled-components'

export const StyledHome = styled.div`

  font-family: var(--main-font);
  font-weight: 200;
  color: ${({ theme }) => theme.main.color};

  background-image: linear-gradient(180deg, 
    ${({ theme }) => theme.main.bgGradientStart},
    ${({ theme }) => theme.main.bgGradientEnd}
  );

  .home-container {
    margin-top: 1rem;
    max-width: 65rem;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }

  .jumbotron {
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 4rem 2rem;
    text-align: center;
    line-height: 3rem;
    background-color: ${({ theme }) => theme.main.bgHeader};
    color: ${({ theme }) => theme.main.colorHeader};
  }

  .jumbotron > h1 {
    font-weight: 600;
  }

  .login-button {
    border: 1px solid transparent;
    border-radius: 5px;
    line-height: 2rem;
    padding: 0.25rem 6rem;
    background-color: #00a11d;
    color: white;
    font-weight: 600;
    opacity: .8;
    transition: .25s;
  }

  .login-button:hover {
    opacity: 1;
  }

  .directions {
    text-decoration: underline;
  }

  .directions:hover {
    color: #40bcf4;
  }

`