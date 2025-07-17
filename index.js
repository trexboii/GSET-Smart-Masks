import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// Automatically chooses the correct entry file (e.g. app/index.jsx)
registerRootComponent(() => ExpoRoot({ context: require.context('./app') }));
