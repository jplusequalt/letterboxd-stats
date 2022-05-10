import styled from 'styled-components'

export const StyledHome = styled.div`

  display: flex;
  justify-content: center;
  font-family: var(--main-font);
  font-weight: 200;

  background-image: linear-gradient(180deg, 
    ${({ theme }) => theme.main.bgGradientStart},
    ${({ theme }) => theme.main.bgGradientEnd}
  );

  background-position: 0 0;
  color: ${({ theme }) => theme.main.color};
  height: 100vh;

  .jumbotron {
    border: 1px solid transparent;
    border-radius: 3px;
    margin: 5rem;
    width: 50rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 3rem;
    padding: 1rem 2rem;
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
    padding: 0 6rem;
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