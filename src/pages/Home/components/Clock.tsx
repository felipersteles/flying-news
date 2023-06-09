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
      <h2>It is now </h2>
      <ClockDisplay>{clock}</ClockDisplay>
    </ClockContainer>
  );
};

const ClockContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1em;
`;

const ClockDisplay = styled.h1`
  font-family: "Alarm Clock";
`;
