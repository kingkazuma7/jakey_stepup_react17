import styled from 'styled-components';
import { Card } from '../../atoms/card/Card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';

interface UserCardProps {
  user: {
    name?: string;
    email?: string;
    companyName?: string;
    website?: string;
    image?: string;
    age?: number;
  };
  isAdmin?: boolean;
}

export const UserCard: React.FC<UserCardProps> = props => {
  const { user, isAdmin } = props;

  return (
    <>
      <Card>
        <UserIconWithName
          image={user.image ?? ''}
          name={user.name ?? ''}
          age={user.age ?? 0}
          isAdmin={isAdmin ?? false}
        />
        <SDL>
          <div>
            <dt>メール</dt>
            <dd>{user.email ?? ''}</dd>
          </div>
          <div>
            <dt>会社名</dt>
            <dd>{user.companyName ?? ''}</dd>
          </div>
          <div>
            <dt>WEB</dt>
            <dd>{user.website ?? ''}</dd>
          </div>
        </SDL>
      </Card>
    </>
  );
};

const SDL = styled.dl`
  dt {
    float: left;
  }
  dd {
    padding-left: 3em;
    overflow-wrap: break-word;
  }
`;
