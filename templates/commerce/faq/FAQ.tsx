import { Col, Container, Row, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function FAQ() {
  const [active, setActive] = useState(1);

  const [faqs] = useState([
    {
      id: 1,
      title: 'What Shipping Methods Are Available?',
      content:
        'Sed quis nunc efficitur, gravida orci sed, gravida felis. Quisque non euismod felis. Suspendisse consectetur, tellus in condimentum fringilla, turpis massa facilisis augue, eget tempor nibh dui in dolor. Donec sagittis scelerisque est. Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.\n' +
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '2. Maecenas ullamcorper est et massa mattis condimentum.\n' +
        '3. Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.\n' +
        '4. Etiam nec massa et lectus faucibus ornare congue in nunc.\n' +
        '5. Mauris eget diam magna, in blandit turpis.\n' +
        '\n' +
        'In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.',
    },
    {
      id: 2,
      title: 'Do You Ship Internationally?',
      content:
        'Sed quis nunc efficitur, gravida orci sed, gravida felis. Quisque non euismod felis. Suspendisse consectetur, tellus in condimentum fringilla, turpis massa facilisis augue, eget tempor nibh dui in dolor. Donec sagittis scelerisque est. Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.\n' +
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '2. Maecenas ullamcorper est et massa mattis condimentum.\n' +
        '3. Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.\n' +
        '4. Etiam nec massa et lectus faucibus ornare congue in nunc.\n' +
        '5. Mauris eget diam magna, in blandit turpis.\n' +
        '\n' +
        'In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.',
    },
    {
      id: 3,
      title: 'How to Track My Order?',
      content:
        'Sed quis nunc efficitur, gravida orci sed, gravida felis. Quisque non euismod felis. Suspendisse consectetur, tellus in condimentum fringilla, turpis massa facilisis augue, eget tempor nibh dui in dolor. Donec sagittis scelerisque est. Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.\n' +
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '2. Maecenas ullamcorper est et massa mattis condimentum.\n' +
        '3. Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.\n' +
        '4. Etiam nec massa et lectus faucibus ornare congue in nunc.\n' +
        '5. Mauris eget diam magna, in blandit turpis.\n' +
        '\n' +
        'In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.',
    },
    {
      id: 4,
      title: 'How Long Will It Take To Get My Package?',
      content:
        'Sed quis nunc efficitur, gravida orci sed, gravida felis. Quisque non euismod felis. Suspendisse consectetur, tellus in condimentum fringilla, turpis massa facilisis augue, eget tempor nibh dui in dolor. Donec sagittis scelerisque est. Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.\n' +
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '2. Maecenas ullamcorper est et massa mattis condimentum.\n' +
        '3. Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.\n' +
        '4. Etiam nec massa et lectus faucibus ornare congue in nunc.\n' +
        '5. Mauris eget diam magna, in blandit turpis.\n' +
        '\n' +
        'In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.',
    },
    {
      id: 5,
      title: 'What Payment Methods Are Accepted?',
      content:
        'Sed quis nunc efficitur, gravida orci sed, gravida felis. Quisque non euismod felis. Suspendisse consectetur, tellus in condimentum fringilla, turpis massa facilisis augue, eget tempor nibh dui in dolor. Donec sagittis scelerisque est. Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.\n' +
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '2. Maecenas ullamcorper est et massa mattis condimentum.\n' +
        '3. Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.\n' +
        '4. Etiam nec massa et lectus faucibus ornare congue in nunc.\n' +
        '5. Mauris eget diam magna, in blandit turpis.\n' +
        '\n' +
        'In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.',
    },
    {
      id: 6,
      title: 'What Happens If There Is A Pricing Error?',
      content:
        'Sed quis nunc efficitur, gravida orci sed, gravida felis. Quisque non euismod felis. Suspendisse consectetur, tellus in condimentum fringilla, turpis massa facilisis augue, eget tempor nibh dui in dolor. Donec sagittis scelerisque est. Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.\n' +
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '2. Maecenas ullamcorper est et massa mattis condimentum.\n' +
        '3. Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.\n' +
        '4. Etiam nec massa et lectus faucibus ornare congue in nunc.\n' +
        '5. Mauris eget diam magna, in blandit turpis.\n' +
        '\n' +
        'In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.',
    },
    {
      id: 7,
      title: 'How do I place an Order?',
      content:
        'Sed quis nunc efficitur, gravida orci sed, gravida felis. Quisque non euismod felis. Suspendisse consectetur, tellus in condimentum fringilla, turpis massa facilisis augue, eget tempor nibh dui in dolor. Donec sagittis scelerisque est. Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.\n' +
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '2. Maecenas ullamcorper est et massa mattis condimentum.\n' +
        '3. Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.\n' +
        '4. Etiam nec massa et lectus faucibus ornare congue in nunc.\n' +
        '5. Mauris eget diam magna, in blandit turpis.\n' +
        '\n' +
        'In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.',
    },
    {
      id: 8,
      title: 'Who Should I Contact If I Have Any Queries?',
      content:
        'Sed quis nunc efficitur, gravida orci sed, gravida felis. Quisque non euismod felis. Suspendisse consectetur, tellus in condimentum fringilla, turpis massa facilisis augue, eget tempor nibh dui in dolor. Donec sagittis scelerisque est. Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.\n' +
        '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        '2. Maecenas ullamcorper est et massa mattis condimentum.\n' +
        '3. Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.\n' +
        '4. Etiam nec massa et lectus faucibus ornare congue in nunc.\n' +
        '5. Mauris eget diam magna, in blandit turpis.\n' +
        '\n' +
        'In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.',
    },
  ]);

  return (
    <section className="faq">
      <Container>
        <Row className="heading-div">
          <Col>
            <h1 className="heading faq__heading">How Can We Help You?</h1>
            <h5 className="text faq__subheading">
              Below are answers to our most commonly asked questions. If you
              cannot find an answer here, please contact us.
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            {faqs.map((faq) => (
              <div className="accordion-item__service" key={faq.id}>
                <div
                  className={
                    active === faq.id
                      ? 'accordion-item__trigger active'
                      : 'accordion-item__trigger'
                  }
                  onClick={() =>
                    active === faq.id ? setActive(0) : setActive(faq.id)
                  }
                >
                  <span className="accordion-item__span">Question</span>{' '}
                  {faq.title}
                </div>
                <div
                  className={
                    active === faq.id
                      ? 'accordion-item__content active'
                      : 'accordion-item__content'
                  }
                >
                  {faq.content}
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center justify-content-end mt-3">
            <h5 className="text faq__text">
              Unable to find satisfactory answers ?
            </h5>
            <Button variant="primary" type="button" className="button">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
