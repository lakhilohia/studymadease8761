import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.studymadease.app',
  appName: 'StudyMadease',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;