import { useEffect, useState } from "react";
import styled from "styled-components";

export const Clock = () => {
  const [clock, setClock] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const clock = setInterval(
      (): void => setClock(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <ClockContainer id="clock">
      <ClockDisplay>{clock}</ClockDisplay>
    </ClockContainer>
  );
};

const ClockContainer = styled.div``;

const ClockDisplay = styled.h1`
  font-family: "Alarm Clock";
`;
