class AppController {

    static getHomepage(req, res) {
        res.state(200).send("Hello Holberton School!");;
    }
};

export default AppController;
