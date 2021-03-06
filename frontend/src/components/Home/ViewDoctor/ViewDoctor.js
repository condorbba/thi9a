import React, { useEffect, useState } from 'react';
import { viewDoctor } from '../../AxiosTest/userRoutes';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import Bio from '../../Main/Profile/Bio/Bio';
import DoctorInfo from '../../Main/Profile/DoctorInfo/DoctorInfo';
import Contact from '../../Main/Profile/Contact/Contact';

const ViewDoctor = props => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (props.location.state !== null) {
      const doctor = props.location.state;
      setDoctor(doctor);
    }

    const getDoctor = async () => {
      const id = props.id;
      try {
        const response = await viewDoctor(id);
        setDoctor(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDoctor();
  }, []);

  const doctorProfile = () => {
    return (
      <div className="user-profile-wrapper">
        <div className="panel-left">
          <Bio user={doctor} />
          <div className="sub-cards">
            <DoctorInfo user={doctor} />
            <Contact user={doctor} />
          </div>
        </div>
      </div>
    );
  };

  return <div>{doctor ? doctorProfile() : <LoadingSpinner />}</div>;
};

export default ViewDoctor;
