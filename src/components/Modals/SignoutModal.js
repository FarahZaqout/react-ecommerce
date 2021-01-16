import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ReactSwal = withReactContent(Swal);

const customModal = async ({ title, icon, subtitle }) =>
  ReactSwal.fire({
    title,
    subtitle,
    icon,
    confirmButtonColor: '#3085d6',
  });

export default customModal;
