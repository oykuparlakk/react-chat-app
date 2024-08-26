import styled from 'styled-components';

interface MessageWrapperProps {
  isUserMessage: boolean;
}

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  justify-content: ${(props) => (props.isUserMessage ? 'flex-end' : 'flex-start')};
  margin-bottom: 15px; 
`;

interface BalloonProps {
  isUserMessage: boolean;
}

export const Balloon = styled.div<BalloonProps>`
  max-width: 70%; 
  padding: 15px 20px; 
  background-color: ${(props) => (props.isUserMessage ? '#6E00FF' : '#F6F6F6')};
  color: ${(props) => (props.isUserMessage ? 'white' : 'black')};
  border-radius: ${(props) => (props.isUserMessage ? '20px 20px 0 20px' : '20px 20px 20px 0')};
  position: relative;
  word-wrap: break-word;
  box-shadow: ${({ theme }) => theme.shadows.default};


  &:after {
    content: '';
    position: absolute;
    ${(props) => (props.isUserMessage ? 'right: -5px' : 'left: -5px')};
    top: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => (props.isUserMessage ? '#6E00FF' : '#F6F6F6')} transparent transparent transparent;
  }
`;

interface TimeStampProps {
  isUserMessage: boolean;
}

export const TimeStamp = styled.span<TimeStampProps>`
  display: block;
  text-align: right;
  font-size: 0.85rem;
  margin-top: 8px;
  color: ${(props) => (props.isUserMessage ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)')};
`;
