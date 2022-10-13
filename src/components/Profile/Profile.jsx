import PropTypes from 'prop-types';
import {
  Card,
  Container,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ info }) => {
  const { username, avatar, location, tag, stats } = info;
  return (
    <Card>
      <Container>
        <img src={avatar} alt="User avatar" className="avatar" width="200" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Container>
      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  info: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    }),
  }),
};
