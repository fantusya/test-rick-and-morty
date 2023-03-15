import { Box } from 'components/Box/Box';
import { BallTriangle } from 'react-loader-spinner';

// const pendingRoot = document.querySelector('#pending-root');

// const Pending = () => {
//   return createPortal(
//     <Box
//       width="100vw"
//       height="100vh"
//       backgroundColor="backdrop"
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Puff
//         height="100"
//         width="100"
//         radius={1}
//         color="#FF1493"
//         ariaLabel="puff-loading"
//         visible={true}
//       />
//     </Box>,
//     pendingRoot
//   );
// };
const Pending = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="backdrop"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#a1fe8d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Box>
  );
};
export default Pending;
