clear
ls
cd Backend/
npm install
sudo apt install npm
sudo apt install nodejs
sudo apt update
# Install curl if not installed
sudo apt install curl
# Add the NodeSource repository (for Node.js 18.x, for example)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
# Now install nodejs and npm
sudo apt install nodejs
npm install
npm start
cd Backend/
ls
sudo nano /etc/systemd/system/backend.service
sudo systemctl daemon-reload
sudo systemctl enable backend.service
sudo systemctl start backend.service
sudo systemctl status backend.service
pwd
sudo systemctl status backend.service
sudo nano /etc/systemd/system/backend.service
sudo systemctl daemon-reload
sudo systemctl enable backend.service
sudo systemctl start backend.service
sudo systemctl status backend.service
cd ..
ls
cd frontend/
npm install
sudo nano /etc/nginx/sites-available/frontend
PORT=80 npm start
sudo PORT=80 npm start
sudo ln -s /etc/nginx/sites-available/frontend /etc/nginx/sites-enabled/
sudo systemctl restart nginx
sudo npm install -g pm2
pm2 start npm --name "frontend" -- start
pm2 startup
pm2 save
pm2 list
sudo systemctl restart nginx
pm2 list
sudo ln -s /etc/nginx/sites-available/frontend /etc/nginx/sites-enabled/
sudo nano /etc/nginx/sites-available/frontend
sudo systemctl restart nginx
sudo netstat -tuln | grep 3000
sudo ss -tuln | grep 3000
ps aux | grep node
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
clear
ls
pm2 list
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
pm2 stop all
pm2 delete all
sudo systemctl stop nginx
sudo ps aux | grep node
sudo kill -9 4638
sudo kill -9 7076
sudo kill -9 2048
sudo reboot
clear
cd frontend/
sudo nano /etc/nginx/sites-available/default
rm -r /etc/nginx/sites-available/default
sudo nano /etc/nginx/sites-available/default
sudo rm -r /etc/nginx/sites-available/default
sudo nano /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl restart nginx
pm2 list
npm start
sudo npm install -g pm2
pm2 start npm --name "frontend" -- start
pm2 save
pm2 startup
pm2 list
screen -S frontend
clear
cd Ba
cd Backend/
pm2 start server.js --name "backend"
pm2 list
ls
cd Backend/
ls
rm -r node_modules/
sudo rm -r node_modules/
ls
cd ..
ls
cd frontend/
rm -r node_modules/
sudo rm -r node_modules/
s
ls
rm -rf node_modules/
npm start
ls
pm2 list
pm2 save
npm start
