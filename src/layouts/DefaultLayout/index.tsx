import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './styles';
import { Header } from '../../components/Header';

export function DefaultLayoult() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
};