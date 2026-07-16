# Mapsted React Native — Sample App

A runnable sample for the Mapsted **React Native** library
[`@mapsted/maps-react-native`](https://www.npmjs.com/package/@mapsted/maps-react-native)
(built on the native Mapsted SDK **26.7.1**). This repository is already configured with the
correct sources, versions, and settings below — clone it, install, and run.

> Using the SDK requires a valid Mapsted commercial licence. This sample ships with a **demo**
> licence for the demo property (Square One). For the full integration guide, see the
> [Mapsted React Native documentation](https://developer.mapsted.com/mobile-sdk/getting-started/react-native-getting-started/).

## Requirements

| | Minimum |
|---|---|
| React Native | **0.76** (certified on **0.76.9**) — 0.74 and older cannot consume the 26.7.1 Android artifacts |
| Android | `minSdkVersion` **26**; a **Material Components** app theme; Kotlin **1.9.25** (RN 0.76.9 default) with `-Xskip-metadata-version-check` |
| iOS | deployment target **16.0**; CocoaPods; **New Architecture disabled** |
| Node | 18+ |

## Getting started

### Step 1 — Install JS dependencies

```sh
npm install
```

The Mapsted wrapper (`@mapsted/maps-react-native@26.7.2`) is already declared in `package.json`
and resolves from the public npm registry — no extra install command is needed.

### Step 2 — iOS pods

This sample's `ios/Podfile` is already set up with everything the SDK needs:

- the **26.7.1** spec source `source 'https://github.com/MapstedHQ/podspec.git'`
  (the universal device+simulator XCFrameworks live here — **not** in `Mapsted/podspec-simulator`, which has no 26.7.1);
- `platform :ios, '16.0'`;
- **`ENV['RCT_NEW_ARCH_ENABLED'] = '0'`** — the Mapsted bridge is a legacy (paper) native module, and
  RN 0.76 turns the New Architecture on by default, which leaves the module unregistered and makes the
  map silently fail to open. Disabling it (parity with Android's `newArchEnabled=false`) is required.

Install the pods:

```sh
cd ios && pod install
```

The iOS licence (`ios/*.key`) is added to *Copy Bundle Resources*, and the required
`Info.plist` usage-description keys (`NSLocationWhenInUseUsageDescription`,
`NSBluetoothAlwaysUsageDescription`, `NSMotionUsageDescription`) are already present — iOS
terminates the app on location access without them.

### Step 3 — Android

The Android project is already configured with `minSdkVersion 26`, a Material Components theme, the
Kotlin `-Xskip-metadata-version-check` flag, and the demo licence in
`android/app/src/main/assets/`.

### Step 4 — Run

Start Metro in its own terminal, then run the app:

```sh
# Android
npm run android

# iOS
npm run ios
```

## Using the map

This sample (`App.tsx`) demonstrates the fullscreen entry point, `launchMapActivity()`, which opens
the native SDK's own map screen:

```tsx
import { launchMapActivity } from '@mapsted/maps-react-native';

<Button title="Launch Map" onPress={launchMapActivity} />
```

For **production** surfaces, the recommended integration is the embedded `MapstedMapView` component,
which is certified on real arm64 hardware and auto-plots the property indoors on mount. The
fullscreen `launchMapActivity()` opens the native SDK's own full-screen map screen and is well
suited to quick previews and simple full-screen use. See the
[Mapsted React Native documentation](https://developer.mapsted.com/mobile-sdk/getting-started/react-native-getting-started/)
for the full `MapstedMapView` guide (embedded map, routing, and turn-by-turn navigation).

## Licensing

Mapsted licences are issued for a specific OS **and** bundle id (an Android licence will not load on
iOS). Replace the bundled demo keys with the licence issued for your own bundle id. Use of the SDK
requires a valid Mapsted commercial licence.
