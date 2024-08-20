import { useContext } from 'react';
import { AlertContext } from './AlertProvider';

export function useAlert() {
  return useContext(AlertContext).alert;
}