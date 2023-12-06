// EX 4
interface Props {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Pages extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}