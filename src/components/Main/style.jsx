import styled from 'styled-components'

export const StyledMain = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 30px;

  @keyframes linearGrad {
    0% {
      border-width: 10px;
      border-style: solid;
      border-image: linear-gradient(to right, darkblue, darkorchid) 1;
      /* box-shadow: 0px 0px 20px 10px #1e90ff; */
    }
    25% {
      border-width: 10px;
      border-style: solid;
      border-image: linear-gradient(to left, #ff00ff, #1e90ff) 1;
      /* box-shadow: 0px 0px 20px 10px #ff00ff; */
    }
    50% {
      border-width: 10px;
      border-style: solid;
      border-image: linear-gradient(to right, #1e90ff, #ff1493) 1;
      /* box-shadow: 0px 0px 20px 10px #ff1493; */
    }
    75% {
      border-width: 10px;
      border-style: solid;
      border-image: linear-gradient(to left, #ff4500, #ff00ff) 1;
      /* box-shadow: 0px 0px 20px 10px #ff4500; */
    }
    100% {
      border-width: 10px;
      border-style: solid;
      border-image: linear-gradient(to right, darkorchid, #ff1493) 1;
      /* box-shadow: 0px 0px 20px 10px red; */
    }
  }

  .cont-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }
  .card {
    color: black;
    font-style: oblique;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    width: 280px;
    height: 100px;
    padding: 5px;
    display: flex;
    animation: linearGrad 8s infinite;

    background-repeat: no-repeat;
    background-image: url(${'https://i.pinimg.com/736x/ca/e0/1a/cae01ab5cce960db0d7819cc96e97ce8--hd-video-pixel-art.jpg'});

    h1::first-letter {
      text-transform: uppercase;
    }
  }
`
