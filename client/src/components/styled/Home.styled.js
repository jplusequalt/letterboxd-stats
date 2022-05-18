import styled from 'styled-components'

export const StyledHome = styled.div`

  font-family: var(--main-font);
  font-weight: 200;
  color: ${({ theme }) => theme.main.color};


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
    background-color: ${({ theme }) => theme.main.bgJumbo};
    color: ${({ theme }) => theme.main.colorJumbo};
  }

  .jumbotron > h1 {
    font-weight: 600;
  }
  .directions {
    font-size: 1.15rem;
    display: block;
    text-decoration: underline;
    margin-bottom: 1.5rem;
  }

  .directions:hover {
    color: #40bcf4;
  }

  .import-container {
    border: 1px solid transparent;
    background-color: #00a11d;
    display: inline-block;
  }
  
  #file-import {
    position: absolute;
    left: -99999rem;
  }

`