import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';
import logo from '../../assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://avatars.githubusercontent.com/u/66640568?s=460&u=33005c55db6f08513cc427accd084bbd699ba9ef&v=4'
              }
              alt="Arthur Lima"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
