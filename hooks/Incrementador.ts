/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const Incrementador = () => {
  const [numeroN1, setNumeroN1] = useState<{ n1: number }>({ n1: 0 });
  const [numeroN2, setNumeroN2] = useState<{ n2: number }>({ n2: 0 });
  const [manualIsPressed, setManualIsPressed] = useState<{ pressed: boolean }>({
    pressed: false,
  });
  const [zerarIsPressed, setZerarIsPressed] = useState<{ pressed: boolean }>({
    pressed: false,
  });
  const [autoIsPressed, setAutoIsPressed] = useState<{ pressed: boolean }>({
    pressed: false,
  });
  const [stopAutoIsPressed, setStopAutoIsPressed] = useState<{
    pressed: boolean;
  }>({
    pressed: false,
  });
  const intervalRef = useRef<{ temp: NodeJS.Timeout | null }>({ temp: null });

  function manualIncrement() {
    if (!intervalRef.current.temp) {
      setTimeout(() => {
        setNumeroN1((prev: { n1: number }) => ({
          n1: prev.n1 + 1,
        }));
      }, 1000);
      setManualIsPressed((prev: { pressed: boolean }) => ({
        pressed: !prev.pressed,
      }));
      setTimeout(() => {
        setManualIsPressed((prev: { pressed: boolean }) => ({
          pressed: !prev.pressed,
        }));
      }, 300);
    }
  }

  function automaticIncrement() {
    if (!intervalRef.current.temp) {
      setAutoIsPressed((prev: { pressed: boolean }) => ({
        pressed: !prev.pressed,
      }));
      setTimeout(() => {
        setAutoIsPressed((prev: { pressed: boolean }) => ({
          pressed: !prev.pressed,
        }));
      }, 300);
      intervalRef.current.temp = setInterval(() => {
        setNumeroN1((prev: { n1: number }) => ({
          n1: prev.n1 + 1,
        }));
      }, 1000);
    }
  }

  function zerarContadores() {
    if (intervalRef.current.temp) {
      clearInterval(intervalRef.current.temp);
      intervalRef.current.temp = null;
    }
    if (numeroN1.n1 !== 0 || numeroN2.n2 !== 0) {
      setNumeroN1((prev: { n1: number }) => ({
        n1: (prev.n1 = 0),
      }));
      setNumeroN2((prev: { n2: number }) => ({
        n2: (prev.n2 = 0),
      }));
      setZerarIsPressed((prev: { pressed: boolean }) => ({
        pressed: !prev.pressed,
      }));
      setTimeout(() => {
        setZerarIsPressed((prev: { pressed: boolean }) => ({
          pressed: !prev.pressed,
        }));
      }, 300);
    }
  }

  function stopAutoIncrementador() {
    if (intervalRef.current.temp) {
      clearInterval(intervalRef.current.temp);
      intervalRef.current.temp = null;
      setStopAutoIsPressed((prev: { pressed: boolean }) => ({
        pressed: !prev.pressed,
      }));
      setTimeout(() => {
        setStopAutoIsPressed((prev: { pressed: boolean }) => ({
          pressed: !prev.pressed,
        }));
      }, 300);
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (numeroN2.n2 > 0) {
        setNumeroN2((prev: { n2: number }) => ({
          n2: prev.n2 - 1,
        }));
      }
      setNumeroN2((prev: { n2: number }) => ({
        n2: prev.n2 + numeroN1.n1,
      }));
      return () => clearTimeout(timeOut);
    }, 500);
  }, [numeroN1.n1]);

  return {
    numeroN1,
    numeroN2,
    manualIsPressed,
    manualIncrement,
    zerarContadores,
    stopAutoIsPressed,
    stopAutoIncrementador,
    autoIsPressed,
    automaticIncrement,
    zerarIsPressed,
  };
};

export default Incrementador;
