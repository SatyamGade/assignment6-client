const Loader = () => {
    return (
        <section className="loader">
            <div>Loading...</div>
        </section>
    )
}

export default Loader

// .loader {
//     width: 100%;
//     height: 100vh;
//     @include flex;
//     > div {
//       @include square(10rem);
//       border-radius: 50%;
//       border-top: 1rem solid rgb(43, 43, 43);
//       border-left: 1rem solid rgb(43, 43, 43);
//       border-right: 1rem solid #fff;
//       border-bottom: 1rem solid #fff;
//       animation: loading-animation 0.5s linear infinite;
//     }
//   }
  
//   @keyframes loading-animation {
//     to {
//       transform: rotateZ(360deg);
//     }
//   }