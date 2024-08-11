import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './image.jpg'

const About = () => {
  const people = [
    {
      name: "Vishwajeet Rajbhar",
      email: "vishwajeetrajbhar01@gmail.com",
      qualification: "B.C.A",
      linkedin: "https://www.linkedin.com/in/vishwajeetrajbhar01",
      github: "https://github.com/VJ-dev404",
      role: "Back-End-Developer",
      projects: ["CRUD Operation", "E-Commerce Using Django"],
image:image   
},
    {
      name: "Chandu Gowda",
      email: "chandugowdaks07@gmail.com",
      qualification: "B.C.A",
      linkedin: "https://www.linkedin.com/in/chandugowda07",
      github: "https://github.com/Chandugowdak",
      role: "Front End Developer ", 
      projects: ["TMDB_Project  ", "Current_Affairs_Of_Different_Country"],
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAWEBAVDRIbEBUVDQ8QEA4WIB0iIiAdHx8kKDQkJCYxJx8fJTItMSsuMDAwIys0ODMtNzQuMC0BCgoKDg0NFg8QFSsZFRk3KystNzc3KzctNzcrKy4tNy83Ky0rLSsrLTcrMzUtKy0tKysrKy0rKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABBEAABAwIDBQUFBgMHBQEAAAABAAIDBBESITEFBkFRgRMiYXGRBzKhwdFCUmKx4fAUI3IkZIKSorLCM0Nj4vEV/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACQRAAICAwACAQQDAAAAAAAAAAABAhEDITEEEkEFEyJRI2Fx/9oADAMBAAIRAxEAPwDDUIQgAQhCABCErTwPkc1kbS97jZrWtLnOPgEAJpWmpnyuDI2OkedGtaXOPQLRN2/Zg91pK1xYNREwgvP9TtB5D1C0XZmyIKZuCCJsbeNm5u8zqeqaRSizJdlezatlsZcNO38RxSeg+ZCtmz/ZlRssZXyTHj3hGw9Bn8Ve8K5IVUh+pC0u6lBF7tJF/iYJD6uupCKiib7kbG/0saF3PVMZqeGijK3a1mnCLedk7SE0SxA6dEhJRxP96Njx4sa5VmXaEjhcnjlmuI9pvYQA6wvnYo9iSXqt1KCX3qSP/CwRn1bZQVf7MqN9+yfJCeGYkZ6HP4qei2z7oIvfUqWp52yC7T5jiEaY0jINrezatiuYi2ob+E4ZP8p+RKqFTTPicWSMdG8atc0tcOhX0qAme1NlQVLME8TZW8LjNvkdR0UtFeh84L1alvF7JJQ0zULsY17F5AkA/C7Q+Rt5lZlVU74nujkY6N7TZzXNLXNPiCpJaaEUIQgQIQhAAhCEACEIQAIQrduBuRNtSXjHSscO2lt/pbzd+XoCWBG7sbs1G0JMELbMB/mSG/Zxj5nwW17s7q01Ay0TcUhHflcAXv8AoPAKyU+wYqSFkVOwMiYNBr5nmfFJEJJm0YoTLV5hXZXLjkbKrKob1k4YLnXgoOevfxda/RdVcpe436KFqJ74idBe2iVmcmJV+0TcBuZPNMJKm5sTcX72ve8EykqQ597kkGw1C6knHugAnw5pkC76i9ze3rbRJOqW5AXvwz4Ju4gZuzPAaXSf8Q1huM3n3jl3fJOwJeCoIHedbw4qa2TXEOBHLPxCp8ZLnYnHPgBbIeKlKapc7CAbDhqL/VIOGjRSYgDayc0MeN4HAZlQOxpDhILgeQzVg2M/vkc2pN6OiPLJlV/ezc6l2ky0zMMoH8uZoAkZ9R4H4KxNC9KysHs+YN7d06nZsuCZuJhP8qVoPZyj5HwUAvrHa2zIaqJ8E8YkjcMweHiDwPivnnf3cqXZkvGSme7+TJb/AEu5O/P1tonZjKNFTQhCZAIQhAAhCWpKd8sjIo2l73vDWNGrnE2AQBN7lbry7TqmwM7sYzmktlEz6nQD9V9M7H2ZDSQx08DAyJjbNHPmTzJ1uoncXdZmzKRkIAMrrOqHj7b/AKDQfqrEs5M0ij0lQ1ZFhcQNOCmFG7Q97ohMuPRlZcSmwJ5BLWSU4GF19LFWaUU3aM4AcQMyb2zVUra27jnkb381NbUlOvDhbmqtWAEnx+KEc7GrnWJsdTkvXVWEW49Nea4c0GwOfjYLh1MfXRDYKLOXVRJGaUjnvw/VdR7JkJAwkknQcE6j2JN2RkwG3DS5/RL3Q/tyEGT3yHwUpSkDCPooRjXNNrWI1T+jcbjn1yVJk0W+iqix0br3AdZ3VXine2MhwzWa0cp7OxsTibfIfv8A+K/RR2a0cmhTI2xfKLRHIHAEHIrpQlJO5mhy5cFKQVOLgemihotocJjtvZ8NTBJBOwPie2zh+RHIjmnpcmlQ1x1zHghE0fNG9u7smz6h0L+8w5xPtlIz6jiFCL6L3z3cZtCmdEbCQd6F33H/AEOh/RfPNTA6N7o3tLXtcQ4HVpGRC0MZxpiKEITIBa/7CN1w979oyt7rCWU1xq+3ed0Bt1PJZRQ0r5pY4YxifJI1rBzcTYL6w3f2UyjpYKWP3YogL2988XdTc9Um6GkSpCTezkvQ5BdwSbQ1YhLIGi56eKipHXJJ4rqUm5ub5pMqDojGjwpOVmJpbzBCUQQmijMNqswvkYRo93Oyr08RcfyVt2/FaplFvtk+ufzSGztlOe7G8BsbdLgd4805SSVmEYNuhlu9sIlxdIbAaeKtMdBEBYNGeuQum3/7FKzIyAeABKc0m2KaS4ZJc+RC45uTdnfj9IqhWDZ8TLlrAD5BczRWaWiwyyyGSfxvYRcG45hMa3alKwkPlaCOFxdQrNHS6UfbkOF7iWZX1sVHxSHyz9Vcpdr0b8u0afMFMZ9hxyNMsBuOQ/JdMJtaaOTJjT3FiMA58+C0djMh/SFnVFESWt4kgWWpCkIHRbSZli+RCGK5AUrG0AWGib0kVibjOydgKLNGAXq9DU5jiA80IiUqI6opicwPNYz7Y93MD21zG2DyGzi2jvsu6jLoOa3kqK3g2RHWU01NIMpIyL2zYeDuhseipOiHK1R8loTiupXwyyQyDC+ORzXjk4GxXi0MS/exDY/b7RM7hdlPEXDljd3W/wDI9F9BrJ/YlS9jRvntnLOerG5D44lqcVS13Gx5FZy6aqLSsVQ5wAJPBJumaNSms0pk7rRlxKQ1EZvNyT4rxPG0XM+i8fRngb+aRr7IZr2y9cCMjkV4M8imUUzehrP4hsjXA3bZwHMLzbdM5zAwOLYwLvA1d4LmshEUZY9znO7YtZe7iOWfmpSpZfIrHJMuEKf+mfz0sAaXOjJGPDk2V1jyNsgTyulNmU0bXCRrSW6nKRpbna9jqLj4Kf2tRNdD2BYcGPEAL913MHgvKWmPZxRhuBsd8I7pOet8r535pPInEqOJqXCQZTtwi2Q42sFWNu7PjkfcjiC458dABxJVtZGcNlGGN0cmJudnXANrX55g8Fhjls6JwuPCoQxw/Zjc4C5N2StsBqb6Kz7vQYHNfHcMdk9hv6rjZVCIZXPjaWucHDM4msB1w5fMqaoKVsVmtFhwHJbyyLiOeOJrbOdl0OOvYAMmPxO8LZ/mr+QqHG17HTSscQ4ucMnEZA2A+Cu9IXdmzH72BuLztmtbsw9Wti8YzXTm2XAShdlmgl9O4hc3SyQgeL6pclWjOXTxxSa9JQkwR8++23Y/YbRE7RZlREHeGNvdd/xPVCuvt2ohJRRSgd6GcEnkx+R+OFC0i9ESjsldx6XstnUbP7sxx83d4/mp8FLbN2W1kMTL+7EwcOACVloiNMwszoUlwahSkLA0AeqYQts4eakLoFI6QuLr3EkRQlWRBzSeIUa0KWLlFoNIFd3gpT2geACB3iOYtY28Rqu4zcA8wFP1NB2rAQQHA5X0I5Kv1Mbojgda4GdiSPBYZEzeElpHr4hqUi5wGQCSkqjoF6xxAxNLS7Ccjey5qOxcHPZmybS5OHik4tquAtI2ztO7dzD5LiOpdJja5gDb91wkuT04IodjpsDdQlmtzCYtnscN/Ip3E/InMmx0BJVwjbM8r0dbKpg+pAtcE4nixtxP0VwUTu/T4QXEEd2zSQRfn8lKldcVo4pO3R6F6/QrlJSy8AmSeXTyKcHXIpjiXhcqBqyTKQqKkN8TyTIuPP4pFxQSoEHv1B22z61pzP8ADvcPNveH5LxSO0Y8cUrPvRPHqCEK0DjZZm+C6CbbNlxwwvGjoYz6gFOgFBkN5KW5uMgl2whKFCqhezYhJDyTYvUgmG0W2s4cdVLRcJXpiM81hbiUyLl5I9cYlJukSlE67fIqD3ohs5r+BbY+YUjSzYfI6plvJMHMYBriv0t+qUuAk1IqG074Dh10yTej7TDhkiLRhzcZhhI9Lp+M8ilHBwFwAfA6LBtLR1R2I/wpDb9i9wOhY5kjXdbqNlPZ4iGSC/AOY62dtL806dWygFv8KD5HVeU+Mm7mYSeFwlovf7G2ypXveQ4EAcHAAj0Vs2My8gPBouoSGIAlwGZ0Vt2dR9kyxzcfePyWsFeznyP4HwqLaj0Xpqh4pq5ckLUyocOqSdMly0pFoThgQB00Lqy8QSgRw9N3OS7imsxzVIDx7kJlXz4IpHfdiefQIVBZJ+zyrE2y6F97/wBlY0+bO6fi1WO4WYewraXabPkgJ70NQ6w5Nf3h8cS0kFJujmq0LrxctcuiU7smqPCmW0z3B/Unj3galRdYS+50A0Us0gt2Rj0NSdZWRRC8jwzlc5nyCq2099Wi7adl/wAbvkEKDlw3eSMek7t/bTKSIuNjIR/LZxcfovGUUkdJG+cl05fimJ+yX/Z8ALAdFndFVGetpjK4uxVkIcTc3GMZLZZmBwLXC7XCzuquWOlRgstyspFRAb3Bskv44Myf3Tz4J7UAxvdE73m6fjbwI/eqZVdO14sVwtU6Z6Udq0JHbEYyv1ySJ2mw3tmeQuSVG1WxmA++434Yk+oKZkeTQAeJ4pVEr8h9BIfed3QM7XGSm6Db95xTTDC50Mb4XWt2gc25BHO9/RRFDTdvKIgLsGcxOmDl108rrn2kUwb/AA1Q24eHYLgnTMj439V14YWtnD5E/WaouZXllVd3d7mSAR1BDH6B5sGP8+RVtYAcwbg6FEouLocZKStHjWJZoXgXQKkYFcFKELh4QAm4ppM65Ssz+SQAWiEQO+c/ZUFW/wDu72jzd3R+aFCe2Cu7OiZCD3pZxcc2tzPxwrxUjGctlc9iW2Ow2iYHGzKiIt8Mbe83/kOq+gl8hUNU+GWOWM4XxyNcw8nA3C+qNg7biq6aGoYQBJGDa/uniOhuOimRMN6JYFI1clgM1Ud6t7HRSdhTkAtF5H2BseQuqXtTb083/Ukc4cr930VRxNqxfcSZoW0t6KWC93do/g1lnep0VN2vvpUT3DLQs/D73r9FVJpvFN5JuC2jjjEmWRsc1dYXXuSSdSSSXJmXpCWZJmXqrszHlLJaWEg5iaMj1C3ljgQDwLfgV88xPIIdxBv6Lf6B4dG0jQXA8r2UTKiNtsbMbUNzOCVnuvGo+o8FUpXua50UgwSt1HB44OHMK+uHHi3X8QURvBsiOojAceze3OGTK7T93xHgufJjUl/Z1YMzg6+CkdmA4uLvyTrZsElQ/BCP6nm+Bg5n6JCHYNpP7TVRRsxWdaUF59dPNaDRUccTGxxgNYBc24+N+PmsYYd7OjL5HqtIT2Zs9kDAxmZJ7zjbE88SVV/ajIP4eIXt/aW2/wArv31VzHPnkPALNfajU/zKeK+jZHnrYD/aV2xVHnSd9Kox6ldjbxVFMbRyHCPsuu5h6KBZL6oEtj+S0dPpKbXDVNk77wyWbMOxdzzdGfmFaYZQ4BzSHNOhBBBWENkUtsbb89MbxPNr5tObD0WMsKfDaOdrps1lw5qr+wd84J7MlHYyeJ7juvDqrPZc8otdOhST4MnxJMtsnz2qH2/tFlLBNUP92OMm2mI8B1Nh1QmMxz2t7U7auELTdsEYb4Yzm75DohU2sqXSyPlebve9znHmSbleLZHHJ27EVpvsh3lEZkopXd1wc+DwcB3m9QL9DzWZruGVzHNe04XNILSNQUNWCdM0usqS6SRxOZdcqOlkzTSk2iJm49CW94ciuJ5VsmZikkyQMqbPkXPaJ2McOeksX7ySZeuMWaAHcJW37nVPaUsTjc/y4yfE4QHfEfFYZE5a97Naq9GwHO0kjDpxNx+YSlwa6W2V4aLk6eXfCzHe/aE7p3RztwRhx7BozZh5+Z5rQarE856BzbDla91Ab80EclNLI8hro3NLDY3093qspq4nZ4WRQzJtWZ29tvDoPT9/FWTdDbFWx4hhb20WElzHPthA+6eB8NPlVHVGWZF7aaK+7h0eCIyu96XMeDQDb5lc+JP2PZ+oTgsL0XOlq2zMEjLgHLCRZzLagjmsf9oFXjr3gZhkcbfhiPxcVrFLGGEEZXb3unH4/ALBdo1pmnllv78ryPInL4LsifNM9xL1tuvikAV2CqEOWOSrXpmx6Ua9OxD9kite7G9ktOWseTJDxaTm3+lUtj05ilQ0npjTa2jd6SsjnibLGcTHNu0/JY/7Zd4cT20MbsmEPntxd9lvQZ9RyT/Ye97aHZs7nEOkx/2dh+09wPwFrn9VktVUPle+R5LnvcXOcdXEm5K5fSpG8slxEUIQqMgQhCAHNDVGJ1xmDk4cwpp0wcLg5WyVcTimqC3LVp18FSdCaJPEjFmk2OBzHRDiqA6L1yHJIlegosB1E9aX7K6zuSRX0qmO9W/+qy9hVy9mVThq3M+9FfqD+pTfBGuA/wDU/rNvRZ97QdpOdP2QPcjzI5uI+Q/Mq9GWzJXf+S3wCx3eeqL6mY3v/MI9CsMr1R6f06K+45P4I2omJ006rSfZ9UF9MGn/ALZkA8siP9x9Fl5K0X2am0FSfxZeijH06vOftjbZObz7QMFHNJfPsJA0+LjZvyWHsetJ9q1Vggp4AbYyC7xDR9T8FmQK6DxGPGOXZdkmzClC7RWSLYsl2x6QuhrkAPBIu3zBrSSbCyZmQDMmwCiq2sMhsMmjQc/EpOVBQV1WZXX0aBZo5BNEIWZQIQhIAQhCABCEIAWhmLfEcQnYkDhl1UcvWm2iaYD+6GlIMn5+qVaeSqxC7Sp/cmowV9OfvOLT1CrrSnVBUdnLFJe2CVjvQgp/AG6yzhtPK86CoefTP5LE6iTE4uJ1JuVqO8lWG7OeQdZSB43BWVH98Fz5OnreCqg2ej96fv6LSPZ2LUkrjoZyfQN+izUlaPuY7Ds55vYOkOfLPM+iWPpfmP8AjKn7Sq7tKwNH/bgjafAnvH8wqmCnG1KszTyyk3xyuPQnJNl0HjCjSu2uSF10HADNOwHIcuJZQ3XpzKayVf3fVNXOJNzmUnL9BQrUVBec8hwCQQhQMEIQgAQhCABCEIAEIQgAQhCABdNcRobIQgBZlSeIv8EqKhp428wV6hNMC87W29FLs+CNsrTJjYZG4hiFm2PxVYFzp8v39EIWGTp63hy/CjwBXGqrhBsdrQbPfcAcTiJJPofghCrF0nzn+CM7JHMeoXJmbzv0QhbWeWJun5C3xSbnE6m6EKQOUIQgAQhCABCEIAEIQgD/2Q==" // Replace this with an actual image URL
    }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">About Us</h1>
      <div className="row">
        {people.map((person, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <img src={person.image} alt={person.name} className="rounded-circle mb-3" width="100" height="100" />
                <h5 className="card-title fw-bold fs-4">{person.name}</h5>
                <p className="card-text fw-bold">{person.role}</p>
                <p className="card-text"><strong>Email:</strong> {person.email}</p>
                <p className="card-text"><strong>Qualification:</strong> {person.qualification}</p>
                <p className="card-text  "><strong>Projects:</strong></p>
                <ul className="list-unstyled text-center text-primary ">
                  {person.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
                <a href={person.linkedin} className="btn btn-primary btn-sm m-1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={person.github} className="btn btn-dark btn-sm m-1" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
