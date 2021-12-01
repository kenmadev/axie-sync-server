<p align="center">
    <img src="https://i.imgur.com/skukI2q.png" style="width: 150px"/>
    </br>
    <b>Axie Sync Server</b>
    <br></br>
</p>

[![downloadsBadge](https://img.shields.io/npm/dt/axie-sync-server?style=for-the-badge)](https://github.com/kenmadev/axie-sync-server)
[![versionBadge](https://img.shields.io/npm/v/axie-sync-server?style=for-the-badge)](https://github.com/kenmadev/axie-sync-server)

Axie Sync Server is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Inspiration
When season 19 came out. Axie Infinity disabled the old battle logs where you can look up anyones battle history via Ronin address.
It was a useful feature specially for managers who were constantly checking the progress of their newly recruited scholars.
Axie Infinity replaced it by storing the battle history into the device as a `cache` file. The only way for others to view a battle is to share it via  the "Share" button.

This project let players sync their battle history into the cloud just by using the application. Which may help managers track their scholars just like the old days.
It's still unknown when is the new Battle logs API gonna come out. Until then, the Axie Sync project remains.

## Axie Project
- [axie-sync-server](https://github.com/kenmadev/axie-sync-server) - This handles all the request from pc and mobile clients. Store and query battle logs easily via the API.
- [axie-sync-pc](https://github.com/kenmadev/axie-sync-pc) - The PC client that sync Axie Infinity battle history to `axie-sync-server`. Only available for Windows.
- [axiesyncmobile](https://github.com/kenmadev/axiesyncmobile) - The Mobile client that sync Axie Infinity battle history to `axie-sync-server`. Only available for Android devices.

## Available API endpoint?
- `POST` `/api/battles` - Receives the axie battle data
- `GET` `/api/battles/:ronin` - Query the battles of the given Ronin Address

## I'm a dev how can I contribute?
Axie Sync Server is a `Next.js` project. A basic understanding of Next.js is a must.
To contribute, just clone the repository and follow the instructions below.

First, clone and install the dependencies.

```bash
$ git clone https://github.com/kenmadev/axie-sync-server
$ cd axie-sync-server
$ yarn install
```

Create `.env` file in the root folder
```
SERVER_PORT=4000
MONGODBURI=mongodb+srv://<project>:<password>@<hostname>/<collection>?retryWrites=true&w=majority
```
Replace the `MONGODBURI` with your own mongodb details. You can try `https://www.mongodb.com` for free clusters.

Run the development server
```bash
$ yarn dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Donate
I do this open source work in my free time. If you'd like me to invest more time on it, please donate. Thank you in advance!
- BNB (BEP-20) or ETH (ERC-20) - `0xff66328040AeaD7ae1E7Ab5c858652cECD0a1ad2`
- WETH/SLP/AXS (RON) - `ronin:8374b56c6329815264dbfc2a139d259e95bf745d`
