import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  // Calculate the time difference in milliseconds
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  // Define time intervals in milliseconds
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30.44 * day; // Approximation for an average month
  const year = 365 * day;

  if (timeDifference < second) {
    // Less than a second ago
    return 'just now';
  } else if (timeDifference < minute) {
    // Less than a minute ago
    const secondsAgo = Math.floor(timeDifference / second);
    return `${secondsAgo} second${secondsAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < hour) {
    // Less than an hour ago
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < day) {
    // Less than a day ago
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < week) {
    // Less than a week ago
    const daysAgo = Math.floor(timeDifference / day);
    return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < month) {
    // Less than a month ago
    const weeksAgo = Math.floor(timeDifference / week);
    return `${weeksAgo} week${weeksAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < year) {
    // Less than a year ago
    const monthsAgo = Math.floor(timeDifference / month);
    return `${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`;
  } else {
    // More than a year ago
    const yearsAgo = Math.floor(timeDifference / year);
    return `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`;
  }
};

export function formatNumberWithExtension(num: number): string {
  if (num >= 1000000) {
    // If the number is at least a million, append 'M' and divide by a million
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    // If the number is at least a thousand, append 'K' and divide by a thousand
    return (num / 1000).toFixed(1) + 'K';
  } else {
    // For smaller numbers, no extension needed
    return num.toString();
  }
}
