const { getFontDefinitionFromManifest } = require('next/dist/next-server/server/font-utils');
import React from 'react';
import AppLayout from '../components/AppLayout';

const Profile = () => {
  return (
    <AppLayout>
      <div>내 프로필</div>
    </AppLayout>
  );
};

export default Profile;
