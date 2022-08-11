import {Posts} from '../types/Posts';

type Props = {
    data:Posts;
}

export const PostItem = ({data}: Props) => {
  return (
    <div className="my-4">
        <h4 className="font-bold">
            {data.title}
        </h4>
        <small>
            #{data.id} - Usuário {data.userId}
        </small>
        <p>
            {data.body}
        </p>
    </div>
  );
}