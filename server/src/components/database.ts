import cuid from 'cuid'
import { prisma } from '../services/prisma'

async function getGroups(name?: string, id?: string) {
  return await prisma.group.findMany({
    where: {
      name,
      id,
    },
  })
}

async function createGroup(name: string) {
  return await prisma.group.create({
    data: {
      id: cuid(),
      name,
    },
  })
}

async function deleteGroup(id: string) {
  return await prisma.group.delete({
    where: {
      id,
    },
  })
}

async function getUsers(username?: string, id?: string) {
  return await prisma.user.findMany({
    where: {
      username,
      id,
    },
  })
}

async function createUser(username: string, avatar_url: string) {
  return await prisma.user.create({
    data: {
      id: cuid(),
      username,
      avatar_url,
    },
  })
}

async function deleteUser(id: string) {
  return await prisma.user.delete({
    where: {
      id
    }
  })
}

export { createGroup, getGroups, deleteGroup, getUsers, createUser, deleteUser }
