import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title ? <Title>{title}</Title> : false}
      <List>
        {stats.map(stat => {
          return (
            <Item key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
