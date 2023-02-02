import Leftbar from './strip';
import Menu from './menu';
import '../../sass/sidebar.scss';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Leftbar />
      <Menu />
    </section>
  );
};

export default Sidebar;
