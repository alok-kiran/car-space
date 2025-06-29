import { StyleSheet } from 'react-native';

// Colors
const colors = {
  transparent: 'transparent',
  black: '#000000',
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  red: {
    500: '#ef4444',
    600: '#dc2626',
  },
  blue: {
    500: '#3b82f6',
    600: '#2563eb',
  },
  green: {
    500: '#10b981',
    600: '#059669',
  },
  purple: {
    500: '#8b5cf6',
    600: '#7c3aed',
  },
  yellow: {
    500: '#f59e0b',
    600: '#d97706',
  },
};

// Spacing scale
const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
};

// Tailwind-like utility functions
export const tw = {
  // Layout
  flex1: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  flexCol: { flexDirection: 'column' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  justifyEvenly: { justifyContent: 'space-evenly' },
  itemsCenter: { alignItems: 'center' },
  itemsStart: { alignItems: 'flex-start' },
  itemsEnd: { alignItems: 'flex-end' },
  
  // Padding
  p0: { padding: spacing[0] },
  p1: { padding: spacing[1] },
  p2: { padding: spacing[2] },
  p3: { padding: spacing[3] },
  p4: { padding: spacing[4] },
  p5: { padding: spacing[5] },
  p6: { padding: spacing[6] },
  p8: { padding: spacing[8] },
  
  px1: { paddingHorizontal: spacing[1] },
  px2: { paddingHorizontal: spacing[2] },
  px3: { paddingHorizontal: spacing[3] },
  px4: { paddingHorizontal: spacing[4] },
  px6: { paddingHorizontal: spacing[6] },
  
  py1: { paddingVertical: spacing[1] },
  py2: { paddingVertical: spacing[2] },
  py3: { paddingVertical: spacing[3] },
  py4: { paddingVertical: spacing[4] },
  
  // Margin
  m0: { margin: spacing[0] },
  m1: { margin: spacing[1] },
  m2: { margin: spacing[2] },
  m3: { margin: spacing[3] },
  m4: { margin: spacing[4] },
  
  mx1: { marginHorizontal: spacing[1] },
  mx2: { marginHorizontal: spacing[2] },
  mx3: { marginHorizontal: spacing[3] },
  mx4: { marginHorizontal: spacing[4] },
  
  my1: { marginVertical: spacing[1] },
  my2: { marginVertical: spacing[2] },
  my3: { marginVertical: spacing[3] },
  my4: { marginVertical: spacing[4] },
  
  mb0: { marginBottom: spacing[0] },
  mb1: { marginBottom: spacing[1] },
  mb2: { marginBottom: spacing[2] },
  mb3: { marginBottom: spacing[3] },
  mb4: { marginBottom: spacing[4] },
  
  mt1: { marginTop: spacing[1] },
  mt2: { marginTop: spacing[2] },
  mt3: { marginTop: spacing[3] },
  mt4: { marginTop: spacing[4] },
  
  mr1: { marginRight: spacing[1] },
  mr2: { marginRight: spacing[2] },
  mr3: { marginRight: spacing[3] },
  mr4: { marginRight: spacing[4] },
  
  ml1: { marginLeft: spacing[1] },
  ml2: { marginLeft: spacing[2] },
  ml3: { marginLeft: spacing[3] },
  ml4: { marginLeft: spacing[4] },
  
  // Background colors
  bgWhite: { backgroundColor: colors.white },
  bgBlack: { backgroundColor: colors.black },
  bgTransparent: { backgroundColor: colors.transparent },
  bgGray100: { backgroundColor: colors.gray[100] },
  bgGray200: { backgroundColor: colors.gray[200] },
  bgGray800: { backgroundColor: colors.gray[800] },
  bgBlue500: { backgroundColor: colors.blue[500] },
  bgBlue600: { backgroundColor: colors.blue[600] },
  bgGreen500: { backgroundColor: colors.green[500] },
  bgGreen600: { backgroundColor: colors.green[600] },
  bgRed500: { backgroundColor: colors.red[500] },
  bgPurple500: { backgroundColor: colors.purple[500] },
  bgYellow500: { backgroundColor: colors.yellow[500] },
  
  // Text colors
  textWhite: { color: colors.white },
  textBlack: { color: colors.black },
  textGray600: { color: colors.gray[600] },
  textGray700: { color: colors.gray[700] },
  textGray800: { color: colors.gray[800] },
  textBlue600: { color: colors.blue[600] },
  textGreen600: { color: colors.green[600] },
  
  // Font sizes
  textXs: { fontSize: 12 },
  textSm: { fontSize: 14 },
  textBase: { fontSize: 16 },
  textLg: { fontSize: 18 },
  textXl: { fontSize: 20 },
  text2xl: { fontSize: 24 },
  text3xl: { fontSize: 30 },
  
  // Font weights
  fontNormal: { fontWeight: '400' },
  fontMedium: { fontWeight: '500' },
  fontSemibold: { fontWeight: '600' },
  fontBold: { fontWeight: '700' },
  
  // Text alignment
  textCenter: { textAlign: 'center' },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
  
  // Border radius
  rounded: { borderRadius: 4 },
  roundedMd: { borderRadius: 6 },
  roundedLg: { borderRadius: 8 },
  roundedXl: { borderRadius: 12 },
  rounded2xl: { borderRadius: 16 },
  roundedFull: { borderRadius: 9999 },
  
  // Shadows (iOS/Android compatible)
  shadow: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  shadowLg: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  
  // Width & Height
  wFull: { width: '100%' },
  hFull: { height: '100%' },
  
  // Position
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  
  // Overflow
  overflow: { overflow: 'hidden' },
};

// Helper function to combine styles
export const combine = (...styles) => {
  return StyleSheet.flatten(styles);
}; 