import PropTypes from 'prop-types';
import EyhanNavbar from './EyhanNavbar';
import EyhanFooter from './EyhanFooter';
import EyhanDemoModal from './EyhanDemoModal';

export default function EyhanLayout({ brand, navigation, contact, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-eyhan-dark text-eyhan-sand selection:bg-eyhan-gold selection:text-eyhan-dark">
      <EyhanDemoModal />
      <EyhanNavbar brand={brand} navigation={navigation} contact={contact} />
      <main className="flex-grow">{children}</main>
      <EyhanFooter brand={brand} navigation={navigation} contact={contact} />
    </div>
  );
}

EyhanLayout.propTypes = {
  brand: PropTypes.object.isRequired,
  navigation: PropTypes.array.isRequired,
  contact: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
