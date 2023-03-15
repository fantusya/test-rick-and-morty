import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGoogle } from 'react-icons/ai';
import {
  SignInContainer,
  UserBtn,
  UserContainer,
  UserImg,
  UserGreeting,
} from './SignIn.styled';

const SignIn = ({ profile, login, logOut }) => {
  return (
    <SignInContainer>
      {profile ? (
        <UserContainer>
          <UserImg src={profile.picture} alt="user" />
          <UserGreeting>Hi, {profile.name}!</UserGreeting>
          <UserBtn onClick={logOut}>
            <AiOutlineGoogle color="#808080" size={20} />
            <span>Log out</span>
          </UserBtn>
        </UserContainer>
      ) : (
        <UserBtn onClick={login}>
          <FcGoogle size={20} />
          <span> Sign in</span>
        </UserBtn>
      )}
    </SignInContainer>
  );
};

export default SignIn;
