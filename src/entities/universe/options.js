import DeviceUtils from '@/shared/utils/DeviceUtils';

export const universeOptions = [
  {
    min_radius: 2,
    max_radius: 2.5,
    color: '#f7b377',
    size: 0.15,
    amp: 25,
    velocity: 1,
    y_offset: 0,
    count: DeviceUtils.isMobile() ? 1500 : 15000,
    x_offset: 0,
  },
  {
    min_radius: 8,
    max_radius: 0.5,
    color: '#f7b377',
    size: 0.4,
    amp: 3,
    velocity: 1,
    y_offset: 2,
    count: DeviceUtils.isMobile() ? 500 : 5000,
    x_offset: 0,
  },
  {
    min_radius: 8,
    max_radius: 0.5,
    color: '#f7b377',
    size: 0.4,
    amp: 3,
    velocity: 1,
    y_offset: 0,
    count: DeviceUtils.isMobile() ? 500 : 5000,
    x_offset: 0,
  },
  {
    min_radius: 0.3,
    max_radius: 1.5,
    color: '#035ac5',
    size: 0.2,
    amp: 4,
    velocity: 5,
    y_offset: 0,
    count: DeviceUtils.isMobile() ? 2000 : 20000,
    x_offset: 0,
  },
  {
    min_radius: 8,
    max_radius: 0.5,
    color: 'rgba(239,129,12)',
    size: 0.2,
    amp: 2,
    velocity: 1,
    y_offset: -0.5,
    count: DeviceUtils.isMobile() ? 500 : 5000,
    x_offset: 0,
  },
  {
    min_radius: 7,
    max_radius: 3.5,
    color: '#ffffff',
    size: 0.2,
    amp: 0.5,
    velocity: 1,
    y_offset: 0,
    count: DeviceUtils.isMobile() ? 500 : 5000,
    x_offset: 0,
  },
  {
    min_radius: 2,
    max_radius: 2.5,
    color: '#035ac5',
    size: 0.25,
    amp: 7,
    velocity: 1,
    y_offset: 0,
    count: DeviceUtils.isMobile() ? 1000 : 10000,
    x_offset: 0,
  },
  {
    min_radius: 2.3,
    max_radius: 0.5,
    color: '#c52300',
    size: 0.25,
    amp: 5,
    velocity: 1,
    y_offset: 0,
    count: DeviceUtils.isMobile() ? 500 : 5000,
    x_offset: 0,
  },
];
